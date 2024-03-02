import { Modal } from "@mui/material";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import cook from "../../assest/frying-pan_3808636.png"
import lookCook from "../../assest/cooking_1830839.png"
import "./reusable.css";

const CookPostModal = () => {
  const [showCookPostModal, setShowCookPostModal] = useState(false);
  const [askingQuestionModal, setAskingQuestionModal] = useState(false);
  console.log("cook post modal");
  return (
    <>
      <div
        className="write-something"
        onClick={() => {
          setShowCookPostModal(true)
          // setAskingQuestionModal(true);
        }}
      >
        <Avatar
          sx={{ width: "36px", height: "36px", borderRadius: "50%" }}
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/78010526?s=400&u=4135c48f89d0dc0269f40f02a826ec12b84f9d92&v=4"
        />
        <p className="write">Write something....</p>
      </div>

      <Modal
        open={askingQuestionModal}
        onClose={() => {
          setAskingQuestionModal(false);
        }}
        aria-labelledby="modal-modal-title"
        //   aria-describedby="modal-modal-description"
        className="modal_reusable"
      >
        <div>
          <h1>Please select Option</h1>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}} className="cook-confirmation-container">
            <div className="cook-confirmation">
              <img src={lookCook} alt="lookCook" />
            </div>
            <div className="cook-confirmation">
              <img src={cook} alt="cook" />
            </div>
          </div>
        </div>
      </Modal>
      {showCookPostModal ? (
        <Modal
          open={showCookPostModal}
          onClose={() => {
            setShowCookPostModal(false);
          }}
          aria-labelledby="modal-modal-title"
          //   aria-describedby="modal-modal-description"
          className="modal_reusable"
        >
          <div className="modal_container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div></div>
              <h3>Cook Post</h3>
              <div>
                <CloseIcon />
              </div>
            </div>

            <div>
              <form action="">
                <div style={{ width: "100%" }}>
                  <label htmlFor="yourMessage">Your Message</label>
                  <textarea
                    placeholder="Your Message ..."
                    name="yourMessage"
                    id="yourMessage"
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
                <div className="input-flex">
                  <div>
                    <label htmlFor="Budget" className="label">
                      Budget for one Person
                    </label>
                    <br />
                    <input
                      type="text"
                      name="Budget"
                      id="Budget"
                      className="input-box-modal"
                      placeholder=" Budget"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="selectGender" className="label">
                      Select Gender
                    </label>{" "}
                    <br />
                    <select
                      name="selectGender"
                      id="selectGender"
                      className="input-box-modal"
                    >
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                </div>
                <div className="input-flex">
                  <div>
                    <label htmlFor="Experience" className="label">
                      Experience
                    </label>{" "}
                    <br />
                    <select
                      name="Experience"
                      id="selectGender"
                      className="input-box-modal"
                    >
                      <option value="">0-1 year</option>
                      <option value=""> 1 - 2 year</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="selectTime" className="label">
                      Select Time
                    </label>{" "}
                    <br />
                    <select
                      name="selectTime"
                      id="selectGender"
                      className="input-box-modal"
                    >
                      <option value="">06:00-6:30</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                </div>
                <div className="input-flex">
                  <div>
                    <label htmlFor="Experience" className="label">
                      Cooking Style
                    </label>{" "}
                    <br />
                    <select
                      name="Experience"
                      id="selectGender"
                      className="input-box-modal"
                    >
                      <option value="">North</option>
                      <option value="">Chinease</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="selectTime" className="label">
                      Select your location
                    </label>{" "}
                    <br />
                    <select
                      name="selectTime"
                      id="selectGender"
                      className="input-box-modal"
                    >
                      <option value="">Jp nagar</option>
                      <option value="">Dhanbad</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button className="btn btn-post">Post</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default CookPostModal;
