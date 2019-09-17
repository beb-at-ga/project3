import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../constants';
import { Redirect } from 'react-router-dom';

// Material-UI Imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));


const Login = (props) => {

  const classes = useStyles();

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
        localStorage.setItem('authToken', response.data.token)
        props.updateUser();
      })
      .catch(err => {
        setMessage(`${err.response.status}: ${err.response.data.message}`)
      })
  }


  // const [values, setValues] = React.useState({
  //   name: 'Cat in the Hat',
  //   age: '',
  //   multiline: 'Controlled',
  //   currency: 'EUR',
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  if (props.user._id) {
    return <Redirect to='/profile' />
  } else {
    return (
      <div>
        <h2>Login</h2>
        <span className='red'>{message}</span>
        <form onSubmit={handleSubmit}>
          <div>

            <TextField
              required
              id='filled-required'
              label='Email Address'
              placeholder='Your Email Address'
              className={classes.textField}
              margin='normal'
              variant='filled'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              type='email'
            />

            <TextField
              required
              id='filled-required'
              label='Password'
              placeholder='Your e-mail address'
              className={classes.textField}
              margin='normal'
              variant='filled'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />

          </div>
          <Button type='submit'>Login</Button>

        </form>
      </div>
    )
  }
}

export default Login;