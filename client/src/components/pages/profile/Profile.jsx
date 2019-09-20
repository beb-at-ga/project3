import React from 'react';
import { Redirect } from 'react-router-dom';


import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Tags from './Tags';
import TagSearch from '../TagSearch';

import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const Profile = (props) => {
  if (!props.user) {
    return <Redirect to='/' />
  }

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <ProfileHeader user={props.user} updateUser={props.updateUser} />
          <Tags user={props.user} />
        </Grid>
        <Grid item xs={4}>
          <TagSearch user={props.user} />
        </Grid>

        <ProfileDetails user={props.user} updateUser={props.updateUser} />

      </Grid>
    </Box>
  )
}

export default Profile;