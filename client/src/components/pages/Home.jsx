import React from 'react';
import TagSearch from './TagSearch'
import "../../App.css";

// Material-Ui
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();

  let profilePic = '';
  if (props.user.profilePic) {
    profilePic = <img src={props.user.profilePic} alt='profile'></img>
  } else {
    profilePic = <img src='http://placegoat.com/100/100' alt='profile'></img>
  }

  if (!props.user._id) {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + '/public/mentorimage.png'} />;
        <p>Unauthenticated Home</p>
        <ul>
          <li>Add Hero images (maybe 2 or 3)</li>
          <li>Add some content about what it is.</li>
          <li>Add some content about how to get started.</li>
          <li>Maybe put a Signup button on in the call to action.</li>
        </ul>
      </div>
    )
  } else {
      return (
        <div className="home">
          <Grid container justify="center" alignItems="center">
            <h1>Welcome Back...</h1>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={props.user.profilePic} className={classes.bigAvatar} />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <h2>{props.user.firstname}</h2>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <p>Start your search here</p>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TagSearch />
          </Grid>
        </div>
     )
  }
}