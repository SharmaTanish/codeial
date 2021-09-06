import React, { useReducer } from "react";
import { connect } from "react-redux";

class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            confirmPassword:'',
            editMode:false
        }
    }
    render() { 

        const {user} = this.props.auth;
        const {editMode} = this.state;
        return( 
            <div className="settings" >
                <div className="img-container" >
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                </div>

                <div className="field" >
                    <div className="field-label" > Email </div>
                    <div className="field-value" >{user.email}</div>
                </div>

                <div className="field" >
                    <div className="field-label" > Name </div>
                    {
                        editMode ?
                        <input type="text" onChange={this.handleChange} />
                        :
                        <div className="field-value" >{user.name}</div>
                    }
                </div>


            </div>

        )
    }
}
 
function mapStateToProps(state){
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Settings);