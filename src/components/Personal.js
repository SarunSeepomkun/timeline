import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from "@material-ui/core/Typography";

function Personal(){
    return(
        <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          SARUN SEEPOMKUN
Software Developer
 095-920-6644
 Sarunseepomkun@gmail.com
          </Typography>
        </Container>
      </React.Fragment>
    )
}

export default Personal;