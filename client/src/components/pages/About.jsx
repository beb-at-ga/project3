import React from 'react'

import AboutText from './AboutText';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const About = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClickOpen} className={classes.button}>
        About Us
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} onClick={handleClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              About Us
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <AboutText />
        </Container>
      </Dialog>
    </div>
  );
}

export default About