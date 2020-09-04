import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ipeach from "../images/sarun_seepomkun.jpeg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "200px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 250,
    height: 190,
    margin: "10px",
  },
  controls: {
    display: "flex",
    // alignItems: "center",
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
}));

function Personal() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={Ipeach}
        title="sarun_seepomkun"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Mr.Sarun Seepomkun
          </Typography>
          {/* <Typography variant="subtitle1" color="textSecondary">
            Software developer
          </Typography> */}
          <div className={classes.controls}>
            <Typography subtitle1="h2">
              Software developer for 8 years participating in the complete
              product development lifecycle of successfully launched
              applications.Enthusiastic new programming technology
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default Personal;
