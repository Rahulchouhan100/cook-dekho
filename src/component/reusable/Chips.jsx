import React from "react";
import ManIcon from "@mui/icons-material/Man";

const Chips = ({ icon, title }) => {
  return (
    <button className="chips">
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default Chips;
