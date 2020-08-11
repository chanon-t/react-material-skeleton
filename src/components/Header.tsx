import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import { theme } from '../theme';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: grey[300],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          {'Header'}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.'}
          {'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. '}
        </Typography>
        <Typography variant="body1">Vivamus suscipit tortor eget felis porttitor volutpat.</Typography>
      </Container>
    </header>
  )
}

export default Header;