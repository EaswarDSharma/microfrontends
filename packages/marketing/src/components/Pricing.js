import React from 'react';
import Typography from '@mui/material/Typography';
import { Link  } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Pricing() {


  return (
    <React.Fragment>
      <div>
      Im some other page!
      <Link to="/">Go back home</Link>
      <Link to="/otherpage">Go about page</Link>

    </div>
    </React.Fragment>
  );
}
