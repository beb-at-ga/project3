import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import "../../App.css";

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
  },
  button: {
    fontSize: 40,
    fontFamily: 'fantasy',
  },

}));

const UnauthenticatedHome = (props) => {
  const classes = useStyles();
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const handleOnClick = () => {
    setRedirectToSignUp(true);
  }

  if (redirectToSignUp === true) {
    return <Redirect to='/signup' />
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>

          {/* <Grid xs={12} container justify="center" alignItems="stretch"> */}
          {/* <div className="unauth-home"> */}
            <Grid container justify="center" alignItems="stretch">
              <h1 className="welcomeHeader">Welcome To Peer2Here</h1>
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid item xs={10} className='unauth-home'>
              <h1>Have you ever...</h1>
              Found yourself wishing you knew how to do something but didn't know where to start?
              Ever thought, "If I just had someone to help me and mentor me through this"?
              Or have you ever had a skill you wish you could teach someone else?
              Peer2Here is the site for you! The site where you can find a mentor or mentee for all those
              "I wish" ideas. No more of that "wishing" mentality, get connected NOW!
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid container justify="center" alignItems="flex-start">
              <Button className={classes.button} onClick={handleOnClick}>SIGN UP HERE</Button>
            </Grid>
          {/* </div> */}
        </Grid>
      </div>
    )
  }
}

export default UnauthenticatedHome