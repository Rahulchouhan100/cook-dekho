import React from "react";
import "./feed.css";
import Navbar from "../reusable/Navbar";
import { Avatar } from "@mui/material";
import CookCard from "../reusable/CookCard";
import Chips from "../reusable/Chips";
import ManIcon from "@mui/icons-material/Man";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GroupsIcon from '@mui/icons-material/Groups';

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
                  <Chips icon={<ManIcon/>} title={"Male"}/>
                  <Chips icon={<CurrencyRupeeIcon/>} title={"6000"}/>
                  <Chips icon={<GroupsIcon/>} title={"6"}/>
                  
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
    </div>
  );
};

export default Feed;
