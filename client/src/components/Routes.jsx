import React from 'react';
import { Route } from 'react-router-dom';
import { useStyles } from '../theme';


// Custome components
import Home from '../components/pages/Home';
import Profile from '../components/pages/profile/Profile';
import Login from '../components/pages/Login2';
import Signup from '../components/pages/Signup2';
import Logout from '../components/pages/Logout';
import DeleteUser from '../components/pages/DeleteUser';
import AboutText from '../components/pages/AboutText';



const Routes = (props) => {
  const classes = useStyles();

  return (
    // <div className='container'>
    <div className={classes.container}>
      
      <Route exact path='/' render={
        () => <Home user={props.user} />
      } />
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
      <Route path='/deleteuser' render={
        () => <DeleteUser user={props.user} updateUser={props.updateUser} />
      } />
      <Route path='/about' component= {AboutText} />
    </div>
  )
}

export default Routes;