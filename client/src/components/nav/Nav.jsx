import React, { useState, useMemo, forwardRef, } from 'react';
import { Link } from 'react-router-dom';

// Custom Components


// Material-UI Styling Components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DraftsIcon from '@material-ui/icons/Drafts';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DeleteUser from '../pages/DeleteUser';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

const ListItemLink = (props) => {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <Link to={to} {...itemProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink} onClick={() => { props.clickAction() }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired
};

const Nav = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    if (matches) {
      setMobileOpen(false);
    } else {
      setMobileOpen(!mobileOpen);
    }
  }

  let drawer;

  if (props.user._id) {
    drawer = (
      <div className={classes.list} role="presentation" >
        <List component="nav" aria-label="TODO">
          <ListItemLink to="/" primary="Home" icon={<InboxIcon />} clickAction={handleDrawerToggle} />
          <ListItemLink to="/profile" primary="My Profile" icon={<InboxIcon />} clickAction={handleDrawerToggle} />
        </List>
        <Divider />
        <List component="nav" aria-label="TODO">
          <ListItemLink to="/logout" primary="Logout" icon={<DraftsIcon />} clickAction={handleDrawerToggle} />
          <ListItemLink to="/about" primary="About" icon={<DraftsIcon />} clickAction={handleDrawerToggle} />
        </List>
        <Divider />
        <List component="nav" aria-label="TODO">
            <DeleteUser user={props.user}/>
        </List>
      </div>
    );
  } else {
    drawer = (
      <div className={classes.list} role="presentation" >
        <List component="nav" aria-label="TODO">
          <ListItemLink to="/" primary="Home" icon={<InboxIcon />} clickAction={handleDrawerToggle} />
          <ListItemLink to="/signup" primary="Signup" icon={<DraftsIcon />} clickAction={handleDrawerToggle} />
          <ListItemLink to="/login" primary="Login" icon={<DraftsIcon />} clickAction={handleDrawerToggle} />
        </List>
        <Divider />
        <List component="nav" aria-label="TODO">
          <ListItemLink to="/about" primary="About" icon={<DraftsIcon />} clickAction={handleDrawerToggle} />
        </List>
      </div>
    );
  }

  let headerString = '';
  if (props.user.firstname) {
    headerString = `Hi, ${props.user.firstname}!`;
  } else {
    headerString = 'Hello. You Are Not Logged In!'
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {headerString}
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
      </div>
    </div>
  );
}

export default Nav;