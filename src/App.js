import React from "react";
import "./App.css";
import MyTimeline from "./components/MyTimeline";
import Personal from "./components/Personal";
import BottomMenu from "./components/BottomMenu";
import HeaderMenu from "./components/HeaderMenu";
import Box from "@material-ui/core/Box";
// import { positions } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import Skills from "./components/Skills";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: { maxWidth: "850px" },
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
        <Box
          className={classes.root}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                <Box m={2}>
                  <Personal />
                </Box>
              </Typography>
              <Typography variant="body2" component="p">
                <Box
                  m={2}
                  display="flex"
                  justifyContent="center"
                  flexWrap="wrap"
                >
                  <Skills />
                </Box>
              </Typography>
            </CardContent>
          </Card>

          <Box m={2}>
            <MyTimeline />
          </Box>
        </Box>
        {/* footer */}
        <Box style={{ width: "100%" }}>
          <BottomMenu />
        </Box>
      </Box>
    </div>
  );
}

export default App;
