import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import BASE_URL from '../../constants';

// Material-UI Imports
import Button from '@material-ui/core/Button';


const Signup = (props) => {

  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    state.firstname = e.target.firstname.value;
    state.lastname = e.target.lastname.value;
    state.email = e.target.email.value;
    state.password = e.target.password.value;

    console.log(state, BASE_URL);

    axios.post(`${BASE_URL}/auth/signup`, state)
      .then(response => {
        console.log(response);

        localStorage.setItem('authToken', response.data.token)

        props.updateUser();

      })
      .catch(err => {
        console.log(err);
      })
  }

  if (props.user._id) {
    return <Redirect to='/profile' />
  } else {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name: </label>
            <input name='firstname' type='text' placeholder='Your first name...' />
            <label>Last Name: </label>
            <input name='lastname' type='text' placeholder='Your last name...' />
            <label>Email: </label>
            <input name='email' type='email' placeholder='Your email address...' />
            <label>Password: </label>
            <input name='password' type='password' placeholder='Your email address...' />
          </div>
          <Button type="submit">Register</Button>

        </form>
      </div>
    )
  }
}

export default Signup;