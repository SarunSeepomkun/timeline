import React from "react";
import "./App.css";
import MyTimeline from "./components/MyTimeline";
import BottomMenu from "./components/BottomMenu";
import Personal from "./components/Personal";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box>
          <Personal />
        </Box>
        <Box p={1}>
          <MyTimeline />
        </Box>
        <Box>
          <BottomMenu class="footer" />
        </Box>
      </Box>
    </div>
  );
}

export default App;
