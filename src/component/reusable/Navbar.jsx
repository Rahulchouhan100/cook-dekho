import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import logo from "../../assest/logo.png";
import Badge from "@mui/material/Badge";
import "./reusable.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-side-container">
        <img src={logo} alt="logo" className="logo" />
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

        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/78010526?s=400&u=4135c48f89d0dc0269f40f02a826ec12b84f9d92&v=4"
        />
      </div>
    </div>
  );
};

export default Navbar;
