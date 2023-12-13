// import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js"
import { useNavigate } from "react-router-dom";

function AuthDetails() {
    const navigate = useNavigate();

    function userSignOut(){
        console.log(auth);
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
                navigate("/");
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div>
                <button onClick={userSignOut}>Sign Out</button>
            </div>
        </>
    )
}

export default AuthDetails;