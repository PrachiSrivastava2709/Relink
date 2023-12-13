// import React from "react";
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import SignUpGoogle from "../components/SignUpGoogle.jsx";
import Verify from "../components/Verify.jsx"

function LogIn(){
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [verifyMsg, setVerifyMsg] = useState(false);
    const navigate = useNavigate();

    function logIn(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, passwd)
            .then((userCredential) => {
                const user = userCredential.user;
                return user
            })
            .then((user) => {
                user.emailVerified ? navigate("/user") : setVerifyMsg(true); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        return
    }

    return (
        <div className= "bg-gradient">
            <div className="contents">
                <form method="post">
                    <header>SignIn</header>
                    <div className="field">
                        <input 
                            type="email" 
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <p></p>
                    <div className="field">
                        <input 
                            type="password"
                            placeholder="Enter password"
                            value={passwd}
                            onChange={(event) => setPasswd(event.target.value)} 
                        />
                    </div>
                    <p></p>

                    <div className= "pass">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" onClick={logIn}>SignIn</button>
                </form>

                <h5>OR</h5>
                <SignUpGoogle />
                <h3>New to ReLink? <Link to={"/signup"}>Join Now</Link></h3>
            </div>
            <p>{verifyMsg ? <Verify /> : ""}</p>
        </div>
            
    )
}

export default LogIn;