import React,{Component} from "react";
import PostsList from './postsList'

class Home extends Component {
    render() { 
        return ( 
            <div>
                <PostsList posts= {this.props.posts}/>
            </div>
         );
    }
}

export default Home;