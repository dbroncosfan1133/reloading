import React from "react";
import LoginHero from "../components/LoginHero/LoginHero";
import LoginEmail from "../components/LoginEmail/LoginEmail";
import LoginPass from "../components/LoginPass/LoginPass";
import LoginBtn from "../components/LoginButton/LoginButton";
import "./mainpage.css";

function Login() {
  return (
    <div>
      <LoginHero />
      <div className="container mainContain">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <LoginEmail />
            <LoginPass />
            <div>
              <LoginBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;