import React from 'react';
import { makeStyles, Typography, Container, Theme, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center">
          <Box flexDirection="column" textAlign="center">
            <Typography variant="body1">Footer</Typography>
            <Typography variant="body2">
              {`Copyright © ${new Date().getFullYear()}`}
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer;