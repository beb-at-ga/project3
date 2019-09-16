import React from 'react';
import Nav from './Nav';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const drawerWidth = 275;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  }
}));

const Header = (props) => {

  const classes = useStyles();

  return (
    <div>
      <Toolbar >
        <Nav user={props.user} updateUser={props.updateUser} />
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </div>
  )
}

export default Header;