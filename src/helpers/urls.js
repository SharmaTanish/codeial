const rootURL = 'http://codeial.codingninjas.com:8000/api/v2';
export const APIUrls = {
    loginURL: () => `${rootURL}/users/login`,
    signupURL : () => `${rootURL}/users/signup`,
    fetchPostsURL: (pages=1,limit=5) => `${rootURL}/posts?page=${pages}&limit=${limit}`
}