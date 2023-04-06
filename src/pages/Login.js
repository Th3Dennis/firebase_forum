import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Login({setIsAuth}) {

    let navigate = useNavigate();


    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    };
            
  return (
    <div className="loginPage">
      <p>Sign In with Google to continue</p>
      <button className="btn btn-primary" onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Login;
