import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const ProfileHeader = (props) => {

  const classes = useStyles();

  return (
    <Box >
      <h1>I'm a profile header</h1>
      <Grid container spacing={3}>
        <Grid item xs >
          <img src='http://placegoat.com/100/100' alt='profile'></img>
        </Grid>
        <Grid item xs>
          <p>{props.user.firstname} {props.user.lastname}</p>
          <p>{props.user.email}</p>
        </Grid>
        <Grid item xs={6}>
          <a href='htts://www.google.com'>Google</a>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfileHeader;