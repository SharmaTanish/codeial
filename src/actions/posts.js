import { APIUrls } from '../helpers/urls';
import {UPDATE_POSTS} from './actionTypes';
export function fetchPosts(){
    return (dispatch) => {
        // const url = "https://baconipsum.com/api/?callback=?";
        // const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5'; // NOT WORKING
        // const url = 'http://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=5'  // WORKING
        const url = APIUrls.fetchPostsURL();
        fetch(url).then((response) => {
            // console.log(response); // NOT JSON OBJECT
            return response.json();
        }).then((data) => {
            console.log("data ", data);
            dispatch(update_posts(data.data.posts));
        })
    }
}


export function update_posts(posts){
    return {
        type:UPDATE_POSTS,  // INSTEAD OF TAKING IT AS STRING DIRECTLY OVER HERE , WE STORE IT IN A VARIABLE IN ACTIONTYPES AND USE THIS  VARIABLE OVER HERE, SINCE EASY TO CHANGE IN FUTURE
        posts
    }
}