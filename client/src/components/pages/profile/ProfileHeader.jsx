import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const ProfileHeader = (props) => {
  let profilePic = '';
  if (props.user.profilePic) {
    profilePic = <img src={props.user.profilePic} alt='profile'></img>
  } else {
    profilePic = <img src='http://placegoat.com/100/100' alt='profile'></img>
  }

  return (
    <Box >
      <h1>{props.user.firstname} {props.user.lastname}</h1>
      <Grid container spacing={3}>
        <Grid item xs >
          {profilePic}
        </Grid>
        <Grid item xs>
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