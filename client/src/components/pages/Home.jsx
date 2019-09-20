import React from 'react';
import TagSearch from './TagSearch'
import UnauthenticatedHome from './UnauthenticatedHome'
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

const ImageAvatars =  (props) => {
  const classes = useStyles();

  let profilePic = '';
  if (props.user.profilePic) {
    profilePic = props.user.profilePic;
  } else {
    profilePic = 'http://placegoat.com/150/150';
  }

  if (!props.user._id) {
    return (
      <div className="home">
        <UnauthenticatedHome />
      </div>
    )
  } else {
    return (
      <div className="home">
        <Grid container justify="center" alignItems="center">
          <h1>Welcome Back...</h1>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Avatar src={profilePic} className={classes.bigAvatar} />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <h2>{props.user.firstname}</h2>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <TagSearch user={props.user} />
        </Grid>
      </div>
    )
  }
}

export default ImageAvatars;