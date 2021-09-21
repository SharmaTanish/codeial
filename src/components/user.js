import React from "react";
class User extends React.Component {
    render() { 
        return (
            <div className="settings" >

            <div className="img-container" >
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
            />
            </div>
            <div className="field" >
                    <div className="field-label" > Name </div>
                    <div className="field-value" >Tanish</div>
            </div>
            <div className="field" >
                    <div className="field-label" > Email </div>
                    <div className="field-value" >tanish@tanish.com</div>
            </div>
            <div className="btn-grp">
                <button className="button save-btn" >Add Friend</button>
            </div>
            </div>


        )
    }
}
 
export default User;