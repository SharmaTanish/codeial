
export function fetchPosts(){
    return (dispatch) => {
        const url = "https://baconipsum.com/api/?callback=?";
        fetch(url).then((response) => {
            // console.log(response); // NOT JSON OBJECT
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(update_posts(data));
        })
    }
}


export function update_posts(posts){
    return {
        type:"UPDATE_POSTS",
        posts
    }
}