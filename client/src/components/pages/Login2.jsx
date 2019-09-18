import React, { useState, useEffect } from 'react';
import BASE_URL from '../../constants';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

// Material-UI Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
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

  const [open, setOpen] = React.useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  useEffect(() => {
    doRedirect();
  }, [loggedIn]);


  const doRedirect = () => {
    console.log(`loggedIn: ${loggedIn}`);
    return (
      <Redirect to='/profile' />
    )
  }

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
        handleClose();
        setLoggedIn(true);
      })
      .catch(err => {
        setMessage(`${err.response.status}: ${err.response.data.message}`)
      })
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Edit Your Overview</DialogTitle> */}
        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Login;