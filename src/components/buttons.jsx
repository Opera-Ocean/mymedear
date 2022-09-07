import React from "react";
import useNavigate from "react-router-dom";

import { BaseIcon } from "./icons";
import "./comp.css";

export const CustomButton = ({ otherStyle, text, handleClick }) => {
  return (
    <button className="button" style={otherStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export const SocialButton = ({ icon, text }) => {
  return (
    <button className="social-button">
      <BaseIcon icon={icon} />
      {text}
    </button>
  );
};

export const BackButton = ({handleClick}) =>{
  return(
    <button className="back" onClick={handleClick}>
        <BaseIcon icon="arrow-back" />
    </button>
  )
}
