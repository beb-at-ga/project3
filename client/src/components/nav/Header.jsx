import React from 'react';
import Nav from './Nav';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {

  const classes = useStyles();

  let headerString = '';
  
  if (props.user) {
    headerString = `Hi, ${props.user.firstname}!`;
  } else {
    console.log(props.user);
    headerString = 'Hi!'
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar >
          <Nav />
            <Typography variant="h6" className={classes.title}>
              {headerString}             
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>)
}

export default Header;