import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from "@material-ui/core/Typography";

function Personal(){
    return(
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          SARUN SEEPOMKUN
Software Developer
 095-920-6644
 Sarunseepomkun@gmail.com

 Software Developer for 8 years participating in the complete product development lifecycle of successfully launched applications.Enthusiastic new programming technology.
          </Typography>
        </Container>
      </React.Fragment>
    )
}

export default Personal;