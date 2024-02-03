import { Avatar } from "@mui/material";
import React from "react";

const CookCard = ({ name, experience, location, rating, avatarUrl }) => {
  return (
    <div className="cook-card-details">
      <div className="cook-image">
        <Avatar
          sx={{ width: "72px", height: "72px", borderRadius: "50%" }}
          alt="Remy Sharp"
          src={avatarUrl}
        />
        <p className="rating">{rating}</p>
      </div>
      <div className="cook-all-details">
        <h4>{name}</h4>
        <p className="gray-clr">{location}</p>
        <p className="gray-clr">{experience}</p>
        <button className="btn-view-profile">View profile</button>
      </div>
    </div>
  );
};

export default CookCard;
