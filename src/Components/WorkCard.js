import "./WorkCardStyles.css";

import React from "react";

import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title">{props.title}</h2>

      <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink to="{props.view}" className="btn">
          VIEW
        </NavLink>
        <NavLink to="url.com" className="btn">
          GENERATE
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
