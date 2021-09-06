import React from "react";
import { clearAuthState, login } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            email:'',
            password :''
         }
    }

    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }

    handleEmailChange = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password:e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // submit this data to server , then from server recieve success or failure and JWT Token
        const {email,password} = this.state;
        if(email && password){
            this.props.dispatch(login(email,password));  // TO GET ACCESS OF DISPATCH HERE, WE NEED TO CONNECT THIS COMPONET WITH STORE
        }
    }
   
    render() { 
        const {error,inProgress,isLoggedin} = this.props.auth;
        if(isLoggedin){
            return <Redirect to="/" />
        }
        return ( <div>
            <form className="login-form">
                <span className="login-signup-header" >Log In</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field" >
                    <input type="email" placeholder="Email" required onChange={this.handleEmailChange} value = {this.state.email}/> 
                </div>
                <div className="field" >
                    <input type="password" placeholder="Password" required onChange={this.handlePasswordChange}  value = {this.state.password}/> 
                </div>
                <div className="field" >
                {
                    inProgress ? 
                    <button onClick={this.handleSubmit} disabled={inProgress} >Logging In...</button>
                    :
                    <button onClick={this.handleSubmit} disabled={inProgress} >Log In</button>
                }
                    
                </div>
            </form>
        </div> );
    }
}
 
function mapStateToProps(state){
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Login);