import React from "react";
import "./App.css";
import MyTimeline from "./components/MyTimeline";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
// import BottomMenu from "./components/BottomMenu";
// import HeaderMenu from "./components/HeaderMenu";
// import { positions } from "@material-ui/system";
import Address from './components/Address';

function App() {
  return (
    <div className="app__container">
        {/* header */}

          {/* <HeaderMenu /> */}

        {/* content */}
        <div className="app_content">
            <Personal />

            <Skills />

            <MyTimeline />

          <Address />
          </div>
        {/* footer */}

          {/* <BottomMenu /> */}
    </div>
  );
}

export default App;
