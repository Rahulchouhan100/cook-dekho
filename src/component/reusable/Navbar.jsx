import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import logo from "../../assest/logo.png";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import "./reusable.css";

const Navbar = () => {
  const [mouse, setMouse] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="navbar-container">
      <div className="left-side-container">
        <img src={logo} alt="logo" className="logo"  onClick={() => navigate("/feed")}/>
        <div className="search-container">
          <SearchIcon sx={{ color: "gray" }} />

          <div>
            <input
              type="text"
              className="search-input-box"
              placeholder="Search...."
            />
          </div>
        </div>
      </div>
      <div className="right-side-container">
        {/* <Badge badgeContent={4} color="primary"> */}
        <NotificationsNoneIcon sx={{ fontSize: "36px", color: "gray" }} />
        {/* </Badge> */}

        <div
          onMouseOver={() => {
            setMouse(true);
          }}
          onMouseOut={() => {
            setMouse(false);
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/78010526?s=400&u=4135c48f89d0dc0269f40f02a826ec12b84f9d92&v=4"
          />
        </div>
        {mouse && (
          <div
          onClick={() => navigate("/profile")}
            onMouseEnter={() => setMouse(true)}
            onMouseOut={() => setMouse(false)}
            className="hello"
          >
            Profile
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
