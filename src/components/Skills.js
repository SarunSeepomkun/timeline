import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import MobileStepper from '@material-ui/core/MobileStepper';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Avatar from "@material-ui/core/Avatar";
import csharpIcon from "../images/csharp.jpg"
import cssIcon from "../images/css.png"
import jsIcon from "../images/javascript.png"
import htmlIcon from "../images/html.png"
import aspIcon from "../images/ASPDotNet.png"
import sqlIcon from "../images/sql.png"
import reactIcon from "../images/reactjs.png"
import materialuiIcon from "../images/materialui.png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    " & > * ": theme.spacing(1),
  },
  avatarSize: {
    marginLeft: "0.5em",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="C#"
        src={csharpIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="SQL"
        src={sqlIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="ASP"
        src={aspIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="Html"
        src={htmlIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="StyleSheet"
        src={cssIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="Javascript"
        src={jsIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="ReactJS"
        src={reactIcon}
        className={classes.avatarSize}
      />
      <Avatar
        alt="Material-ui"
        src={materialuiIcon}
        className={classes.avatarSize}
      />
    </div>
  );
}

export default Skills;
