import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { theme } from './theme';
import { history } from './util/history';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;