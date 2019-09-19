import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import BASE_URL from '../../constants';


const ContactModal = (props) => {

    const [open, setOpen] = React.useState(false)

    const [body, setBody] = useState('')

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false)
        let token = localStorage.getItem('authToken')

        console.log('body: ', body)
        axios.post(`${BASE_URL}/messages`, 
            {
                senderId: props.sender._id,
                recipId: props.recip._id,
                msgBody: body
            },
            {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => {
                console.log('MESSAGE SENT', response)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setBody( e.target.value )
    }




    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.recip.firstname} {props.recip.lastname}
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Contact {props.recip.firstname}!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Start a dialog by entering some details below; be sure to specify your needs and availability.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="message"
                        label="Message"
                        type="text"
                        fullWidth
                        value={body}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit Message
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ContactModal
