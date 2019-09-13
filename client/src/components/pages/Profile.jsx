import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  if (!props.user) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <p>Hello, {props.user.firstname}!</p>
      <p>I'm the profile page.</p>
    </div>
  )
}

export default Profile;