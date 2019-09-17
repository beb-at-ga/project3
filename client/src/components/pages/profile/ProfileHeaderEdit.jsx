import React, { useState } from 'react';
import BASE_URL from '../../../constants';
import axios from 'axios';

// Material-UI Components
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: '90%',
//     height: '50vh',
//     backgroundColor: theme.palette.background.paper,
//     border: '0px solid #000',
//     padding: theme.spacing(2, 4, 3),
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     margin: 'auto',
//     width: 'fit-content',
//   },
// }));

const ProfileHeaderEdit = (props) => {

  const [open, setOpen] = React.useState(false);

  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [email, setEmail] = useState('');
  // const [menteeTag, setMenteeTag] = useState('');
  // const [mentorTag, setMentorTag] = useState('');
  // const [profilePic, setProfilePic] = useState('');

  function handleClickOpen() {
    setOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    let menteeTagArr;
    let mentorTagArr;

    if (e.target.menteeTag.value) {
        menteeTagArr = e.target.menteeTag.value.split(',').map(str => str.trim());
    } else {
      menteeTagArr = [];
    }

    if (e.target.mentorTag.value) {
        mentorTagArr = e.target.mentorTag.value.split(',').map(str => str.trim());
    } else {
      mentorTagArr = [];
    }

    let body = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      menteeTag: menteeTagArr,
      mentorTag: mentorTagArr,
      profilePic: e.target.profilePic.value
    }
    
    console.log(body);

    axios.put(`${BASE_URL}/profiles/${props.user._id}`, body, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    })
      .then(response => {
        console.log(response);
        // saving the new token so that the user's edits will be rendered
        localStorage.setItem('authToken', response.data.token);
        props.updateUser();

        // Go back to the Bio component that just shows the text
        // this.setState({
        //   currentTab: 'bio'
        // })
      })

  }

  function handleClose() {
    setOpen(false);
  }

  // let profilePic = '';
  // if (props.user.profilePic) {
  //   profilePic = <img src={props.user.profilePic} alt='profile'></img>
  // } else {
  //   profilePic = <img src='http://placegoat.com/100/100' alt='profile'></img>
  // }

  // let test = 'fdfd';

  return (
    <div>
      <Button onClick={handleClickOpen}>Edit Your Overview</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Your Overview</DialogTitle>
        <DialogContent>
          <form id='profile-update-form' onSubmit={handleSubmit} noValidate autoComplete="off">

            <TextField autoFocus margin="dense" id="firstname" label="First Name"
              type="text" fullWidth name='firstname' defaultValue={props.user.firstname}
            />
            <TextField margin="dense" id="lastname" label="Last Name"
              type="text" fullWidth name='lastname' defaultValue={props.user.lastname}
            />
            <TextField margin="dense" id="email" label="E-Mail"
              type="email" fullWidth name='email' defaultValue={props.user.email}
            />
            <TextField margin="dense" id="profilePic" label="Profile Pic URL"
              type="text" fullWidth name='profilePic' defaultValue={props.user.profilePic}
            />
            <TextField margin="dense" id="menteeTag" label="Mentee Tags (Comma seperated)"
              type="text" fullWidth name='menteeTag' defaultValue={props.user.menteeTag}
            />
            <TextField margin="dense" id="mentorTag" label="Mentor Tags (Comma seperated)"
              type="text" fullWidth name='mentorTag' defaultValue={props.user.mentorTag}
            />

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
          </Button>
              <Button onClick={handleClose} color="primary" type='submit'>
                Save
          </Button>
            </DialogActions>
          </form>

        </DialogContent>
      </Dialog>


      {/* <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <form type='submit' onSubmit={saveAndClose} className={classes.form}>
            <input name='firstname' defaultdefaultValue={props.user.firstname}>First Name:</input>
            <input name='lastname' defaultdefaultValue={props.user.lastname}>Last Name:</input>
            <input name='email' defaultdefaultValue={props.user.email}>Email:</input>
            <input name='menteeTag' defaultdefaultValue={props.user.menteeTag}>Mentee Tags:</input>
            <input name='mentorTag' defaultdefaultValue={props.user.mentorTag}>Mentor Tags:</input>
            <button type='submit' onClick={handleClose} >Save</button>
          </form>
        </div>
      </Modal> */}

    </div>
    //   <Box >
    //     <h1>{props.user.firstname} {props.user.lastname}</h1>
    //     <Grid container spacing={3}>
    //       <Grid item xs >
    //         {profilePic}
    //       </Grid>
    //       <Grid item xs>
    //         <p>{props.user.email}</p>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <a href='htts://www.google.com'>Google</a>
    //       </Grid>
    //     </Grid>
    //   </Box>
  )
}

export default ProfileHeaderEdit;

