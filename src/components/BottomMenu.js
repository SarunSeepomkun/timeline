import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
  root: {  maxWidth : 500},
});

function BottomMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <div style={{width:'100%'}}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => { setValue(newValue); }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="About me" icon={<PermIdentityIcon />} />
        <BottomNavigationAction label="Exprerience" icon={<WorkIcon />} />
        <BottomNavigationAction label="Skills" icon={<CodeIcon />} />
        <BottomNavigationAction label="Address" icon={<CodeIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BottomMenu;
