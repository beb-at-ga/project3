import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
<<<<<<< Updated upstream
import ProfileDetails from './ProfileDetails'
=======
>>>>>>> Stashed changes


const Profile = (props) => {

  // this !props.user isn't currently working. The <Profile /> is still being rendered.
  if (!props.user) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <ProfileHeader user={props.user}/>
      <p>Future Profile Details Component</p>
      <ProfileDetails user={props.user}/>
    </div>
  )
}

export default Profile;