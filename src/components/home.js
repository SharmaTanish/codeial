import React,{Component} from "react";
import PostsList from './postsList'
import FriendsList from "./friendsList";
import Chat from "./chat";
class Home extends Component {
    render() { 
        return ( 
            <div className="home" >
                <PostsList posts= {this.props.posts}/>
                {this.props.isLoggedin && <FriendsList friends={this.props.friends} />}
                {this.props.isLoggedin && <Chat />}
            </div>
         );
    }
}

export default Home;