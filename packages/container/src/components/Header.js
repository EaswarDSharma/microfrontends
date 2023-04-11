import React from 'react';
import { AppBar,Grid,IconButton,Toolbar } from '@mui/material';
import { Link  } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';


export default function Header({ isSignedIn, onSignOut }) {

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <Grid container  sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0}>
            <Toolbar>
            <Grid item xs={6} xsoffset={3} md={2}>
          <IconButton 
          color="secondary" 
          aria-label="add to shopping cart" 
          edge="start"
          href="/"
          >
          <ShoppingCartTwoToneIcon />
          </IconButton>
          </Grid>
          <Link to="/otherpage">Other Page</Link>
          </Toolbar>
          </AppBar>
          </Grid>
    </React.Fragment>
  );
}