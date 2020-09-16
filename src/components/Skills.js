import React from "react";
import Avatar from "@material-ui/core/Avatar";
import csharpIcon from "../images/csharp.jpg";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import htmlIcon from "../images/html.png";
import aspIcon from "../images/ASPDotNet.png";
import sqlIcon from "../images/sql.png";
import reactIcon from "../images/reactjs.png";
import materialuiIcon from "../images/materialui.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="container_skills">
      <Avatar alt="C#" src={csharpIcon} />
      <Avatar alt="SQL" src={sqlIcon} />
      <Avatar alt="ASP" src={aspIcon} />
      <Avatar alt="Html" src={htmlIcon} />
      <Avatar alt="StyleSheet" src={cssIcon} />
      <Avatar alt="Javascript" src={jsIcon} />
      <Avatar alt="ReactJS" src={reactIcon} />
      <Avatar alt="Material-ui" src={materialuiIcon} />
    </div>
  );
}

export default Skills;
