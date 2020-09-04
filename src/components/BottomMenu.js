import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
  root: { maxWidth: 375 },
  // stickyToBottom : { position: "sticky", width: "100%", bottom: "0" },
});

function BottomMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Me" icon={<PermIdentityIcon />} />
        <BottomNavigationAction label="Exprerience" icon={<WorkIcon />} />
        <BottomNavigationAction label="Skills" icon={<CodeIcon />} />
        <BottomNavigationAction label="Map" icon={<RoomIcon />} />
      </BottomNavigation>
  );
}

export default BottomMenu;
