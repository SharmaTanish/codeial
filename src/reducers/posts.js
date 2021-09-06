// import { UPDATE_POSTS } from "../actions/posts";

export default function posts(state=[],action){  // good to give initial default state as if in case state passes undefined type then our program not throw error and consider default state
    switch(action.type){
    case "UPDATE_POSTS":
        return action.posts; // THIS WILL BE NOW NEW STATE
    default:
        return state;
    }
}



