import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `I would love to help mentor you in Node.js! `;

const response = `I would love some help! When are you available? `;

export default function AutoGridNoWrap(props) {
  const classes = useStyles();

  let profilePic = '';
  if (props.user.profilePic) {
    profilePic = props.user.profilePic;
  } else {
    profilePic = 'http://placegoat.com/150/150';
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="user's photo" src={profilePic} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>{response}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="user's photo" src={profilePic} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>I am typically available weekdays in the evenings. Would that work for you?</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>Monday's and Tuesday's would work best for me.</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}