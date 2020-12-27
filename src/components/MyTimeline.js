import React from "react";
import "./MyTimeline.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
// import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import WorkIcon from "@material-ui/icons/Work";
import Link from "@material-ui/core/Link";

function MyTimeline() {

  return (
    <div className="container__timeline">
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant="h6" component="h1">
                2012
              </Typography>
              <Typography>
                Grauated from Bachelor of Science in Information Technology at
                Kasetsart University
              
                <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}> Read more</Link>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <ChildCareIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant="h6" component="h1">
                2012 - 2013
              </Typography>
              <Typography>
                Junior programmer at Prosoftexpress company
                <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}> Read more</Link>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant="h6" component="h1">
                2013 - 2015
              </Typography>
              <Typography>
                Programmer analyst at Phillips capital (thailand) public limited
                company<Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}> Read more</Link>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant="h6" component="h1">
                2015 - now
              </Typography>
              <Typography>
                Senior software developer at Bank of Krungsri ayudhya public
                company limited
                <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}> Read more</Link>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default MyTimeline;
