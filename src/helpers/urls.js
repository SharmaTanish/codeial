const rootURL = 'http://codeial.codingninjas.com:8000/api/v2';
export const APIUrls = {
    loginURL: () => `${rootURL}/users/login`,
    signupURL : () => `${rootURL}/users/signup`,
    fetchPostsURL: (pages=1,limit=25) => `${rootURL}/posts?page=${pages}&limit=${limit}`,
    editProfileURL: () => `${rootURL}/users/edit`,
    userProfile : (userId) => `${rootURL}/users/${userId}`,
    userFriends: () => `${rootURL}/friendship/fetch_user_friends`,
    addFriend : (userId) => `${rootURL}/friendship/create_friendship?user_id=${userId}`,
    removeFriend : (userId) => `${rootURL}/friendship/remove_friendship?user_id=${userId}`,

}