import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { auth } from "../../Firebase";
import "./Login.css";
import background from "../../Assets/Img/login_img.png";
import logoLogin from "../../Assets/Img/logo.png";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const authDef = auth;
  const provider = new GoogleAuthProvider();
  let navigate = useNavigate();
  const [PageType] = useState();

  //login
  const handleGoogle = () => {
    signInWithPopup(authDef, provider)
      .then((data) => {
        if (data) {
          sessionStorage.setItem("Token-customer", data.user.accessToken);
          navigate(`/home`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <img src={background} alt="background" className="bg-login"/>
      {PageType === "register" ? (
        <div className="register-form">
          <img src={logoLogin} alt="logo" id="logo-form"/>
          <h4>Create new Account</h4>
          <div className="input-form">
            <p>Email</p>
            <input
              id="email-register"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              required
            />
          </div>
          <div className="input-form">
            <p>Password</p>
            <input
              id="password-register"
              type="password"
              placeholder="6+ karakter"
              required
            />
          </div>
          <button className="button-form">
            Sign Up
          </button>
          <p
            className="to-login"
          >
            Already have an account?
          </p>
        </div>
      ) : (
        <div className="login-form">
          <img src={logoLogin} alt="logo" id="logo-form"/>
          <h4>Welcome, Admin BCR</h4>
          <div className="input-form">
            <p>Email</p>
            <input
              id="email-login"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              required
            />
          </div>
          <div className="input-form">
            <p>Password</p>
            <input
              id="password-login"
              type="password"
              placeholder="6+ karakter"
              required
            />
          </div>
          <button className="button-form">
            Sign In
          </button>
          <div className="btn-google">
            <GoogleButton onClick={handleGoogle} />
          </div>
          <p className="to-login">
            Belum Punya Akun?
          </p>
        </div>
      )}
    </div>
  );
};

