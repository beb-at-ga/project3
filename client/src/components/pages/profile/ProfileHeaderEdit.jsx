import React, { useState } from 'react';

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

  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [menteeTag, setMenteeTag] = useState('');
  const [mentorTag, setMentorTag] = useState('');
  const [profilePic, setProfilePic] = useState('');

  function handleClickOpen() {
    setOpen(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(menteeTag);
    console.log(mentorTag);
    console.log(profilePic);

    // put to profiles route
    // get new jwt token
    // call updateUser

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
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField margin="dense" id="lastname" label="Last Name"
              type="text" fullWidth name='lastname' defaultValue={props.user.lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField margin="dense" id="email" label="E-Mail"
              type="email" fullWidth name='email' defaultValue={props.user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField margin="dense" id="profilePic" label="Profile Pic URL"
              type="text" fullWidth name='profilePic' defaultValue={props.user.profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />
            <TextField margin="dense" id="menteeTag" label="Mentee Tags"
              type="text" fullWidth name='menteeTag' defaultValue={props.user.menteeTag}
              onChange={(e) => setMenteeTag(e.target.value)}
            />
            <TextField margin="dense" id="mentorTag" label="Mentor Tags"
              type="text" fullWidth name='mentorTag' defaultValue={props.user.mentorTag}
              onChange={(e) => setMentorTag(e.target.value)}
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

