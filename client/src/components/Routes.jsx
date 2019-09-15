import React from 'react';
import { Route } from 'react-router-dom';

// Custome components
import Home from '../components/pages/Home';
import Profile from '../components/pages/profile/Profile';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
import Logout from '../components/pages/Logout';

const Routes = (props) => {
  return (
    <div className='container'>
      <Route exact path='/' component={Home} />
      <Route path='/profile' render={
        () => <Profile user={props.user} updateUser={props.updateUser} />
      } />
      <Route path='/login' render={
        () => <Login user={props.user} updateUser={props.updateUser} />
      } />
      <Route path='/signup' render={
        () => <Signup user={props.user} updateUser={props.updateUser} />
      } />
      <Route path='/logout' render={
        () => <Logout user={props.user} updateUser={props.updateUser} />
      } /> 
    </div>
  )
}

export default Routes;