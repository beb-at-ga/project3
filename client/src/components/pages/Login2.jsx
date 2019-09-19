import React, { useState } from 'react';
import BASE_URL from '../../constants';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

// Material-UI Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
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

  const [redirect, setRedirect] = useState(false);
  const [open, setOpen] = React.useState(true);
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
        handleClose();
        setRedirect(true);
      })
      .catch(err => {
        setMessage(`${err.response.status}: ${err.response.data.message}`)
      })
  }

  const handleClose = () => {
    setOpen(false);
    setRedirect(true);
  }

  if (redirect === true) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogContent>
            <h2>Login</h2>
            <span className='red'>{message}</span>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  required
                  id='email'
                  label='Email Address'
                  placeholder='Your Email Address'
                  className={classes.textField}
                  margin='normal'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                />

                <TextField
                  required
                  id='password'
                  label='Password'
                  placeholder='Your e-mail address'
                  className={classes.textField}
                  margin='normal'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                />
              </div>

              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button color="primary" type='submit'>
                  Login
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
export default Login;