import { LOGIN_FAILED,LOGIN_SUCCESS, LOGIN_START,SIGNUP_FAILED,SIGNUP_SUCCESS, SIGNUP_START, AUTHENTICATE_USER, LOG_OUT, CLEAR_AUTH_STATE } from "../actions/actionTypes"
const initialDefaultAuthState={
    user:{},
    isLoggedin:false,
    inProgress:false,
    error:null
}
export default function(state=initialDefaultAuthState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isLoggedin:true,
                inProgress:false,
                user:action.user,
                error:null

            }
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
        return{
            ...state,
            inProgress:false,
            error:action.error

        }
        case LOGIN_START:
        case SIGNUP_START:
        return{
            ...state,
            inProgress:true,

        }
        case AUTHENTICATE_USER:
            return{
                ...state,
                user:action.user,
                isLoggedin:true
            }
        case LOG_OUT:
            return{
                ...state,
                user:{},
                isLoggedin:false
            }
        case CLEAR_AUTH_STATE:
        return{
            ...state,
            error:null
        }
        default:
            return{
                ...state
            }
    }
}