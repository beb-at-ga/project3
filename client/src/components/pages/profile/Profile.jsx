import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Tags from './Tags';
// import TagSearch from '../TagSearch';

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
      {/* <TagSearch /> */}
      <ProfileDetails user={props.user} updateUser={props.updateUser}/>
    </div>
  )
}

export default Profile;