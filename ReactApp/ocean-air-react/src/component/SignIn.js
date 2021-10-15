import React,{useState} from "react"
import "../CSS/SignIn.css";
import { connect } from "react-redux";

function SignIn(props){
    const [userSignIn,setUserSignIn]=useState({})
    const [userSignUp,setUserSignUp]=useState({})

    const handleCloseDisplay=()=>{
        props.OnSignInClicked(false)
        props.OnSignUpClicked(false)
    }

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

    const handleOnChangeSignIn=(e)=>{
        setUserSignIn({
            ...userSignIn,
            [e.target.name]:e.target.value
        })
    }

    const handleOnChangeSignUp=(e)=>{
        setUserSignUp({
            ...userSignUp,
            [e.target.name]:e.target.value
        })
    }

    const handleOnLogin=()=>{
        fetch('http://localhost:8080/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:userSignIn.email,
                password:userSignIn.password
            })
        }).then(response=>response.json())
        .then(results=>{
            localStorage.setItem('jsonwebtoken',results.token)
            // props.onLogin()
            console.log(results)
        })
    }

    const handleOnRegister=()=>{
        fetch('http://localhost:8080/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                firstName:userSignUp.firstName,
                lastName:userSignUp.lastName,
                phone:userSignUp.phone,
                email:userSignUp.email,
                password:userSignUp.password
            })
        }).then(response=>response.json())
        .then(results=>{
            console.log(results)
        })
    }


    const SignInBtn=(
        <div className="loginBackground">
            <div className="loginDiv">
                <div className="loginHeading">
                    <h5>Sign In</h5>
                    <button onClick={handleCloseDisplay} type="button" class="btn-close" aria-label="Close"></button>
                </div>
                <div className="loginTextBoxes">
                    <input type="text" placeholder="Email" onChange={handleOnChangeSignIn} name="email" required/>
                    <input type="password" placeholder="Password" onChange={handleOnChangeSignIn} name="password" required/>
                </div>
                <button className="loginBtn" onClick={handleOnLogin}>Sign In</button>
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
                    <button onClick={handleCloseDisplay} type="button" className="btn-close" aria-label="Close"></button>
                </div>
                <div className="signUpTextBoxes" id="signin-container">
                    <input type="text" placeholder="First name" onChange={handleOnChangeSignUp} name="firstName" required/>
                    <input type="text" placeholder="Last name" onChange={handleOnChangeSignUp} name="lastName" required/>
                    <input type="text" placeholder="Phone Number" onChange={handleOnChangeSignUp} name="phone" required/>
                    <input type="text" placeholder="Email" onChange={handleOnChangeSignUp} name="email" required/>
                    <input type="password" placeholder="Password" onChange={handleOnChangeSignUp} name="password" required/>
                </div>
                <button className="signUpBtn" onClick={handleOnRegister}>Sign Up</button>
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