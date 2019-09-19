import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';
import BASE_URL from '../../constants';


const ContactModal = (props) => {

    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false)

        Axios.post(`${BASE_URL}/messages`)
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit Message
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ContactModal
