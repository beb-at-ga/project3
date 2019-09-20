import React from 'react';
import BASE_URL from '../../../constants';
import axios from 'axios';

// Material-UI Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create'

const useStyles = makeStyles(theme => ({
    button: {
        margin: '0 auto'
    },

}));

const ProfileHeaderEdit = (props) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

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

        axios.put(`${BASE_URL}/profiles/${props.user._id}`, body, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        })
            .then(response => {
                console.log(response);
                localStorage.setItem('authToken', response.data.token);
                props.updateUser();
            })
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>

            <Button onClick={handleClickOpen} color='primary' className={classes.button}><CreateIcon /></Button>


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
        </div>
    )
}

export default ProfileHeaderEdit;