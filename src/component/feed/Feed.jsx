import React, { useState } from "react";
import "./feed.css";
import Navbar from "../reusable/Navbar";
import { Avatar, Modal } from "@mui/material";
import CookCard from "../reusable/CookCard";
import Chips from "../reusable/Chips";
import ManIcon from "@mui/icons-material/Man";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupsIcon from "@mui/icons-material/Groups";
import CookPostModal from "../reusable/CookPostModal";

const Feed = () => {
  const [showSendRequestModal,setShowSendRequestModal] = useState(false)
  console.log("feeddddd");
  return (
    <div className="feed-container">
      <Navbar />
      <div className="feed-post-container">
        <div className="post">
          <CookPostModal />
          <div className="customer-post-container">
            <div>
              <div className="customer-post-card">
                <div className="name-avatar">
                  <Avatar />
                  <div>
                    <h4>Rahul chouhan</h4>
                    <small className="posted-time">16 hour ago</small>
                  </div>
                </div>
                <p className="post-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  tenetur dicta mollitia non recusandae explicabo veritatis
                  reprehenderit voluptatem! Reprehenderit fugiat voluptatem,
                  esse commodi sapiente ab impedit omnis excepturi culpa nihil
                  inventore blanditiis iusto minus beatae ullam! Ipsam eaque
                  temporibus doloremque odit ullam illo optio eos, obcaecati ut
                  ad iusto necessitatibus?
                </p>
                <div className="chips-container">
                  <Chips icon={<ManIcon />} title={"Male"} />
                  <Chips icon={<CurrencyRupeeIcon />} title={"6000"} />
                  <Chips icon={<GroupsIcon />} title={"6"} />
                   <button className="btn btn-request" onClick={() => setShowSendRequestModal(true)}>Send Request</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-rated-cooks">
          <h3>Top Rated Cooks</h3>
          <div className="cook-card-container">
            <CookCard
              name={"Mohanlaal singh"}
              experience={"11 years"}
              rating={"4.6"}
              location={"Bengaluru, India"}
              avatarUrl={"https://avatars.githubusercontent.com/u/1148717?v=4"}
            />
            <CookCard
              name={"Harikat Kumar"}
              experience={"4 years"}
              rating={"4.2"}
              location={"JP nagar, India"}
              avatarUrl={"https://avatars.githubusercontent.com/u/28640082?v=4"}
            />
          </div>
        </div>
      </div>

      <Modal
        open={showSendRequestModal}
        onClose={() => {
          setShowSendRequestModal(false);
        }}
        aria-labelledby="modal-modal-title"
        //   aria-describedby="modal-modal-description"
        className="modal_reusable"
      >
        <div className="send-request-container">
          <div className="send-request-heading">
            <h3>Please Fill your details</h3>
          </div>
          <form action="">
            <label htmlFor="name">Name</label> <br />
            <input type="text" className="input-field" placeholder="Enter your name" /> <br />
            <label htmlFor="name"> phone number</label> <br />
            <input type="text" className="input-field" placeholder="Enter your phone number"/> <br />
            <label htmlFor="message">Your message</label> <br />
            <textarea name="message" id="message"  rows="5" placeholder="Enter your message" className="textarea"></textarea>
            <div className="btn-wrapper">
              <button className="btn">Send</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Feed;
