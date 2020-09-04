import React from "react";
import "./App.css";
import MyTimeline from "./components/MyTimeline";
import Personal from "./components/Personal";
// import BottomMenu from "./components/BottomMenu";
import HeaderMenu from "./components/HeaderMenu";
import Box from "@material-ui/core/Box";
// import { positions } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { width: "100%", maxWidth: "850px" },
});

function App() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        alignContent="flex-start"
        minHeight="100%"
      >
        {/* header */}
        <Box style={{ width: "100%" }}>
          <HeaderMenu />
        </Box>
        {/* content */}
        <Box className={classes.root}>
          <Box m={2}>
            <Personal />
          </Box>

          <Box m={2}>
            <MyTimeline />
          </Box>
        </Box>
        {/* footer */}
        <Box style={{ width: "100%" }}>
          {/* <BottomMenu /> */}
        </Box>
      </Box>
    </div>
  );
}

export default App;
