import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../constants';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let postBody = {
      email: email,
      password: password
    }

    axios.post(`${BASE_URL}/auth/login`, postBody)
      .then(response => {
        // console.log(response.data);

        localStorage.setItem('authToken', response.data.token)

        props.updateUser();

      })
      .catch(err => {
        setMessage(`${err.response.status}: ${err.response.data.message}`)
      })
  }

  if (props.user._id) {
    return <Redirect to='/profile' />
  } else {
    return (
      <div>
        <h2>Login</h2>
        <span className='red'>{message}</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input name='email' type='email' placeholder='Your email address...' onChange={(e) => setEmail(e.target.value)} />
            <label>Password: </label>
            <input name='password' type='password' placeholder='Your email address...' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>

        </form>
      </div>
    )
  }
}

export default Login;