// import React from "react";
import { useReducer, useState } from "react";
import { INITIAL_STATE, signUpReducer } from "../components/signUpReducer.js"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.js";
import SignUpGoogle from "../components/SignUpGoogle.jsx";
import Verify from "../components/Verify.jsx"
import { Link } from "react-router-dom";

function SignUp() {
    const [state, dispatch] = useReducer(signUpReducer, INITIAL_STATE)
    const [verifyMsg, setVerifyMsg] = useState(false);

    async function signUp(event) {
        event.preventDefault();
        if (state.tempPasswd !== state.conPasswd) { 
            //required conditions of validation
            alert("Passwords do not match! \nEnter again");
        } else {
            createUserWithEmailAndPassword(auth, state.email, state.conPasswd)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const actionCodeSettings = {
                        url: 'http://localhost:3000/user/',
                        handleCodeInApp: true
                      };
                    setVerifyMsg(true);
                    sendEmailVerification(user, actionCodeSettings);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        return;
    }

    return (
        <div className="bg-gradient">
            <div className="content">
                <form method="post" action="/home">
                    <header> Sign Up </header>
                    <div className="field">
                        <input
                            type="email"
                            placeholder="Email or phone number"
                            value={state.email}
                            onChange={(e) => { dispatch({ type: "emailChange", payload: e.target.value }) }} 
                        />
                    </div>
                    <p></p>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={state.tempPasswd}
                            onChange={(e) => { dispatch({ type: "tempPasswdChange", payload: e.target.value }) }} 
                        />
                    </div>
                    <p></p>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={state.conPasswd}
                            onChange={(e) => { dispatch({ type: "conPasswdChange", payload: e.target.value }) }} 
                        />
                    </div>
                    <p></p>
                    <button type="submit" onClick={signUp}>Join</button>
                </form>
                <h5>OR</h5>
                <SignUpGoogle />
                <h3>Already on ReLink? <Link to={"/login"}>Sign In</Link></h3>
            </div>
            <p>{verifyMsg ? <Verify /> : ""}</p>
        </div>
    )
}

export default SignUp;