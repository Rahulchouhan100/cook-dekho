import React from "react";
import "./feed.css";
import Navbar from "../reusable/Navbar";
import { Avatar } from "@mui/material";
import CookCard from "../reusable/CookCard";

const Feed = () => {
  return (
    <div className="feed-container">
      <Navbar />
      <div className="feed-post-container">
        <div className="post">
          <div className="write-something">
            <Avatar
              sx={{ width: "36px", height: "36px", borderRadius: "50%" }}
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/78010526?s=400&u=4135c48f89d0dc0269f40f02a826ec12b84f9d92&v=4"
            />
            <p className="write">Write something....</p>
          </div>
        </div>
        <div>
          <div className="customer-post-container"></div>
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
    </div>
  );
};

export default Feed;
