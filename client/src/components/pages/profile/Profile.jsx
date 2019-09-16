import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileHeader from '../profile/ProfileHeader';


const Profile = (props) => {

  // this !props.user isn't currently working. The <Profile /> is still being rendered.
  if (!props.user) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <ProfileHeader user={props.user}/>
      <p>Future Profile Details Component</p>
    </div>
  )
}

export default Profile;