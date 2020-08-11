import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              <Link to="/" style={{ textDecoration: 'none' }}>LOGO</Link>
            </Typography>
            <Box display="flex" flexDirection="row-reverse" width="100%">
              <nav>
                <Button variant="contained">
                  <Link to="/sign-up" style={{ textDecoration: 'none' }}>{'Sign Up'}</Link>
                </Button>
              </nav>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

export default NavBar;