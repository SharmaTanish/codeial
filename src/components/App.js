

// installed --> npm i redux react-redux redux-thunk redux-logger

import React from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link,Route, Switch} from 'react-router-dom';
// import posts from "../reducers/posts";
import {fetchPosts} from '../actions/posts';
import Home from "./home";
import Navbar from './navbar';
import Page404 from "./page404";
import Login from "./login";
import Signup from "./signup";

// function App() {
//   return (
//     <div className="App">
//      App
//     </div>
//   );
// }

class App extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchPosts());
  }

  render(){
    return(
      <Router>
      <div>
        <Navbar/>
        {/* <PostsList posts={this.props.posts} /> */}


      <Switch>
        <Route path="/" exact render={(props) => {
          return <Home {...props} posts = {this.props.posts} />
        }} />
        <Route path="/login"  component={Login} />
        <Route path="/signup"  component={Signup} />
        <Route component={Page404} />
        </Switch>
      </div>
      </Router>
    )
  }
}


function mapStateToProps (state){  // WE AUTOMATICALLY GETS STATE AS ARGUMENT HERE, TO USE THIS STATE TO STORE DATA FROM THIS STATE/REDUX-STORE TO PROPS
     return {
    posts:state.posts
  }  
}

export default connect(mapStateToProps)(App); // CONNECT HAS NESTED FUNCTION FIRST OUTER FUNCTION TAKE mapStateToProps AS PARAMETER AND 2ND INNNER FUNCTION TAKEE App AS PARAMETER
