import React from "react";
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            email:'',
            password :''
         }
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
    }
   
    render() { 
        return ( <div>
            <form className="login-form">
                <span className="login-signup-header" >Log In</span>
                <div className="field" >
                    <input type="email" placeholder="Email" required onChange={this.handleEmailChange} value = {this.state.email}/> 
                </div>
                <div className="field" >
                    <input type="password" placeholder="Password" required onChange={this.handlePasswordChange}  value = {this.state.password}/> 
                </div>
                <div className="field" >
                    <button onClick={this.handleSubmit} >Log In</button>
                </div>
            </form>
        </div> );
    }
}
 
export default Login;