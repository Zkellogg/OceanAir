const initialState={
    isAuthen:false,
    isSignInActive:false,
    isSignUpActive:false
}

const reducer=(state=initialState,action)=>{
    if(action.type==='ON_LOGIN'){
        return{
            ...state,
            isAuthen:true
        }
    }else if(action.type==='ON_LOGOUT'){
        return{
            ...state,
            isAuthen:false
        }
    }else if(action.type==='ON_SIGNINBTN_CLICKED'){
        return{...state,
            isSignInActive:action.payload,
            isSignUpActive:false
        }
    }else if(action.type==='ON_SIGNUPBTN_CLICKED'){
        return{...state,
            isSignUpActive:action.payload,
            isSignInActive:false
        }
    }else if(action.type==='OPEN_SIGNIN_WINDOW'){
        return{
            ...state,
            isSignUpActive:false,
            isSignInActive:action.payload
        }

    }else if(action.type==='OPEN_SIGNUP_WINDOW'){
        return{
            ...state,
            isSignInActive:false,
            isSignUpActive:action.payload
        }
    }
    return state
}

export default reducer
