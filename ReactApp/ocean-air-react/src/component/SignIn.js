import React from "react"
import "../CSS/SignIn.css";
import { connect } from "react-redux";

function SignIn(props){
    const handleSignIn=()=>{
        if(props.isSignInClicked){
            props.OnSignInClicked(false)
        }else{
            props.OnSignInClicked(true)
        }
    }

    const handleSignUp=()=>{
        if(props.isSignUpClicked){
            props.OnSignUpClicked(false)
        }else{
            props.OnSignUpClicked(true)
        }
    }

    const SignInBtn=(
        <div className="loginBackground">
            <div className="loginDiv">
                <div className="loginHeading">
                    <h5>Sign In</h5>
                    <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
                <div className="loginTextBoxes">
                    <input type="text" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                </div>
                <button className="loginBtn">Sign In</button>
                <div className="createDiv">
                    <label>Don't have an account?</label><button onClick={handleSignUp}>Create one</button>
                </div>
            </div>
        </div>
    )

    const SignUpBtn=(
            <div className="signUpBackground">
                <div className="signUpDiv">
                <div className="signUpHeading">
                    <h5>Sign Up</h5>
                    <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
                <div className="signUpTextBoxes">
                    <input type="text" placeholder="First name" required/>
                    <input type="text" placeholder="Last name" required/>
                    <input type="text" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                </div>
                <button className="signUpBtn">Sign Up</button>
                <div className="signInDiv">
                    <label>Have an account?</label><button onClick={handleSignIn}>Login</button>
                </div>
            </div>
        </div>
)

    const ActiveBtn=(
        <div>
            {props.isSignInClicked ?SignInBtn:null}
            {props.isSignUpClicked ?SignUpBtn:null}
        </div>
    )
    return(
        <div>
            {ActiveBtn}
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
return{
    OnSignInClicked:(isClicked)=>dispatch({type:'OPEN_SIGNIN_WINDOW',payload:isClicked}),
    OnSignUpClicked:(isClicked)=>dispatch({type:'OPEN_SIGNUP_WINDOW',payload:isClicked})
}
}

export default connect(null,mapDispatchToProps)(SignIn)