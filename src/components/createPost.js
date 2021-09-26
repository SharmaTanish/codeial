import React, { Component } from 'react';

class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state={
            content:'',
        }

    }

    handleChange = (e) =>{
        this.setState(
            {
                content:e.target.value,
            }
        )
    }

    handleOnChange = () => {
        // dispatch action
    }

    render() {
        return (
            <div className="create-post" >
            <textarea className="add-post" onChange={this.handleChange} value={this.state.content} ></textarea>
            <div>
                <button id="add-post-btn" onClick={this.handleOnChange} > Add Post</button>
            </div>
            </div>
        );
    }
}

export default CreatePost;