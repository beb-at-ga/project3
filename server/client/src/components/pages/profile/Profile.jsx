import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Tags from './Tags';

const Profile = (props) => {

  // this !props.user isn't currently working. The <Profile /> is still being rendered.
  if (!props.user) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <ProfileHeader user={props.user}/>
      <Tags user={props.user} />
      <ProfileDetails user={props.user}/>
    </div>
  )
}

export default Profile;