import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import BASE_URL from '../../constants';

// Material-UI Imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
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

const Signup = (props) => {

  const classes = useStyles();

  const [body, setBody] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [redirectHome, setRedirectHome] = useState(false);
  const [redirectProfile, setRedirectProfile] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    body.firstname = e.target.firstname.value;
    body.lastname = e.target.lastname.value;
    body.email = e.target.email.value;
    body.password = e.target.password.value;

    console.log(body, BASE_URL);

    axios.post(`${BASE_URL}/auth/signup`, body)
      .then(response => {
        console.log(response);
        localStorage.setItem('authToken', response.data.token)
        props.updateUser();
        setRedirectProfile(true)
      })
      .catch(err => {
        console.log(err);
      })
  }

  // const handleClose = () => {
  //   setOpen(false);
  // }
  
  const handleCancel = () => {
    setOpen(false);
    setRedirectHome(true);
  }

  if (props.user._id || redirectProfile === true) {
    return <Redirect to='/profile' />
  } else if (redirectHome === true) {
    return <Redirect to='/' />
  } else {
    return (
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogContent>
            <h2>Signup</h2>
            <span className='red'>{message}</span>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField required id='firstname' label='First Name'
                  placeholder='First Name'
                  className={classes.textField}
                  margin='normal'
                  name='firstname'
                  type='text'
                />

                <TextField required id='lastname' label='Last Name'
                  placeholder='Last Name'
                  className={classes.textField}
                  margin='normal'
                  name='lastname'
                  type='text'
                />

                <TextField required id='email' label='EMail'
                  placeholder='Email Address'
                  className={classes.textField}
                  margin='normal'
                  name='email'
                  type='email'
                />

                <TextField required id='password' label='Password'
                  placeholder='Your password'
                  className={classes.textField}
                  margin='normal'
                  name='password'
                  type='password'
                />
              </div>
              <DialogActions>
                <Button onClick={handleCancel} color="primary">
                  Cancel
                </Button>
                <Button color="primary" type='submit'>
                  Signup
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default Signup;