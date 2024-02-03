import React from "react";
import loginImg from "../../assest/Professional Cook 1.png";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-img">
        <img src={loginImg} alt="loginImg" className="login-img" />
      </div>
      <div className="login-box">
        <div style={{ padding: "16px" }}>
          <h1>
            Welcome to <span className="company-name">COOKDEKHO</span>
          </h1>
          <p className="subtitle">Find a cook in minute</p>
          <div className="form-container">
            <form action="">
              <label htmlFor="login" className="label">
                Login
              </label>
              <br />
              <input
                type="text"
                name="lgoin"
                id=""
                placeholder="Enter your email or mobile number"
                className="input-box"
              />
              <div className="btn-container">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
