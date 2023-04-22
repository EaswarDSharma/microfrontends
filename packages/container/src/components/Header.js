import React from 'react';
import { AppBar,Button,Grid,IconButton,Toolbar } from '@mui/material';
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
          <AppBar position="static" style={{ borderRadius: '10px' ,background: '#4CAF50' }} elevation={0}>
            <Toolbar>
          <IconButton
          style={{ color: '#99ff99' }}
          aria-label="add to shopping cart"
          edge="start"
          href="/">
          <ShoppingCartTwoToneIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}></div>
          <Button variant="text" sx={{
             color: '#ccffcc',
              fontSize: '1.2rem', 
              fontFamily: 'Calibri', }} href="/otherpage">
            About</Button>
          </Toolbar>
          </AppBar>
    </React.Fragment>
  );
}
