import React, { useState } from "react";
import loginImg from "../../assest/Professional Cook 1.png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import apiCall from "../../utils/api";
import { validationSchemaLogin } from "../../Validation/validationSchema";
import { useFormik } from "formik";
import Loader from "../reusable/Loader";
import cook from "../../assest/frying-pan_3808636.png";
import lookCook from "../../assest/cooking_1830839.png";

const Login = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [showScreen, setShowScreen] = useState(1);

  const formik = useFormik({
    initialValues: {
      credential: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) => {
      setShowLoader(true);
      setShowScreen(3);
      loginApi(values);
    },
  });

  const loginApi = async (values) => {
    try {
      let bodyData = {};
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.credential);
      if (isEmail) {
        bodyData.email = values.credential;
      } else {
        bodyData.phone = values.credential;
      }
      const result = await apiCall("POST", "api/v1/send-otp", bodyData);
    } catch (error) {
      if (error?.message === "Network Error") {
        alert("bsdk cors error aarha hai");
      }
    } finally {
      setShowLoader(false);
    }
  };

  const handleClick = () => {
    showScreen == 2 ? setShowScreen(1) : setShowScreen(2);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-img">
          <img src={loginImg} alt="loginImg" className="login-img" />
        </div>

        {showScreen === 2 ? (
          <div className="login-box">
            <div style={{ padding: "16px" }}>
              <h1>
                Welcome to <span className="company-name">CooKDekho</span>
              </h1>
              <p className="subtitle">Find a cook in minute</p>
              <div className="form-container">
                <form action="" onSubmit={formik.handleSubmit}>
                  <label htmlFor="login" className="label">
                    Please Enter your details
                  </label>
                  <br />
                  <input
                    type="text"
                    name="credential"
                    onChange={formik.handleChange}
                    id="credential"
                    placeholder="Enter your email or mobile number"
                    className="input-box"
                  />
                  {formik.touched.credential && formik.errors.credential && (
                    <small className="show-error">
                      {formik.errors.credential}
                    </small>
                  )}
                  <div className="btn-container">
                    <button className="btn" type="submit">
                      {!showLoader ? "Submit" : <Loader />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
        {showScreen === 3 ? (
          <div className="login-box">
            <div style={{ padding: "16px" }}>
              <h1>
                Welcome to <span className="company-name">CooKDekho</span>
              </h1>
              <p className="subtitle">Find a cook in minute</p>
              <div className="form-container">
                <form action="">
                  <label htmlFor="name" className="label">
                    Enter your name to continue
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    // onChange={formik.handleChange}
                    id="name"
                    placeholder="Enter your name"
                    className="input-box"
                  />
                  {formik.touched.credential && formik.errors.credential && (
                    <small className="show-error">
                      {formik.errors.credential}
                    </small>
                  )}
                  <div className="btn-container">
                    <button className="btn" type="submit">
                      {/* {!showLoader ? "Continue" : <Loader />} */}
                      continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}

        {showScreen === 1 ? (
          <div className="asking-for-permissions">
            <h1>Please Select !</h1>
            <div className="card-container">
              <div className="card" onClick={handleClick}>
                <img src={cook} alt="cook" className="img-cook" />
                <br />
                <button className="btn"> I'm cook</button>
              </div>
              <div className="card" onClick={handleClick}>
                <img src={lookCook} alt="cook" className="img-cook" />
                <br />
                <button className="btn"> I'm Looking for cook</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Login;
