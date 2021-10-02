import React, { Component } from 'react';
import '../chat.css';
import io from 'socket.io-client';  // using websocket ( for 2 way communication between server and client)
import { connect } from 'react-redux';

class Chat extends Component {
    constructor(props){
        super(props);
        this.state={
            messages:[], // this be like :- [{content:"some message", self:true}, {...}, ...]
            typedMessage:'',
            chatClosed:false,
        }
        this.socket = io.connect('http://54.237.158.65:5000');  // NOT WORKING AS OF NOW!!!!!!!
        this.userEmail =  props.user.email;

        if(this.userEmail){
            this.setUpConnections();  // i.e., when user login with his email in our codeial web app, he is automatically joining the chatroom
        }
    }


    handleSubmit = () =>{
        const {typedMessage} = this.state;

        if(typedMessage && this.userEmail){
            this.socket.emit('send_message',{
                message:typedMessage,
                user_email:this.userEmail,
                chatroom:'codeial',
            })
        }
    }

    setUpConnections = () =>{
        const socketConnection = this.socket; // here 'this' is pointing to chat component only
        const self = this;
        this.socket.on('connect', function (){ 
            console.log("Connection Established");
 // using socketConnection.emit() instaed of this.socket.emit() , becoz when this callback function is called by socket library 'this' will be changed since async, therefore get error, tehrfore storev this privously and then you the stored value ( i.e., socketConnection)
// similarly wher to use single 'this' oly there we use 'self' variable , which stores actual 'this'
        socketConnection.emit('join_room',{    //server is listening, we are sending 'join_root' action
                
                user_email : this.userEmail,
                chatroom : 'codeial',  // this is not a chat-bot, this is a group chat of all loggedin users as we have made single chatroom named 'codeial'

            })

            socketConnection.on('user_joined', function (data){  // we are listening
                console.log("New User Joined", data);

            })

        })

        socketConnection.on('recieve_message', function (data) {
            //add message to state
            const {messages} = self.state;
            const {messageObject} = {};
            messageObject.content = data.message;

            if(data.user_email === self.userEmail){
                messageObject.self = true;
            }

            self.setState ({
                messages:[...messages,messageObject],
                typedMessage:'',
            })

        })

    }

    closeChatBox=() => {
        this.setState({
            chatClosed:true,
        })
    }

    openChatBox=() => {
        this.setState({
            chatClosed:false,
        })
    }
 
    render() {
        const {messages,typedMessage,chatClosed} =this.state;
        return (
            <div className={
                chatClosed
                ?
                'closed-chat-container'
                :
                'chat-container'
                } >
                <div className="chat-header"  >
                    <span onClick={this.openChatBox} className="open-chat" >
                        Chat
                    </span>
                    {/*icon to close chat box*/}
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828744.png" 
                    alt=""
                    height={17}
                    onClick={this.closeChatBox} /> 

                </div>

            <div className="chat-messages" >
                {messages.map((message) => {
                    <div className={
                        message.self
                        ?
                        'chat-bubble self-chat'
                        :
                        'chat-bubble other-chat'
                    } >
                        {message.content}
                    </div>
                })}
            </div>
            <div className="chat-footer">
                <input type="text" value={typedMessage} onChange={ (e) =>  this.setState({typedMessage:e.target.value})} />
                <button onClick={this.handleSubmit} > Submit </button>
            </div>
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return {
        user:auth.user,
    }
}

export default connect(mapStateToProps) (Chat);