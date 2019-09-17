import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import BASE_URL from "./constants";

// Custom Components
import Header from "./components/nav/Header";
import Routes from "./components/Routes";
import Footer from './components/footer/Footer';

// Material UI Styling Components
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/Styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    margin: '0px 0px 0px 0px',
    [theme.breakpoints.up('sm')]: {
      margin: '0px 0px 0px 240px',
      flexShrink: 0,
    },
  }
}));


const App = () => {
  const [user, setUser] = useState({})
  const classes = useStyles();

  useEffect( () => {
    getUser();
  }, []);

  const getUser = () => {
    console.log("Get user is running")
    // see if there is a token in localStorage
    let token = localStorage.getItem("authToken");

    if (token) {
      // console.log(`token found: ${token}`)
      axios
        .get(`${BASE_URL}/auth/current/user`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          // console.log(response.data);
          setUser(response.data.user);
          // console.log(user);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setUser({ user: null });
    }
  };

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Header user={user} updateUser={getUser} />
          <main className={classes.main} >
            <Routes user={user} updateUser={getUser} />
          </main>
          <Footer />
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;

