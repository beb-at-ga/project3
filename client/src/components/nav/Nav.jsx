import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import DraftsIcon from '@material-ui/icons/Drafts';

// const drawerWidth = 240;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const ListItemLink = (props) => {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
        <Link to={to} {...itemProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
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
};

const TopNav = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)} >
      <List component="nav" aria-label="home projects blog about">
        <ListItemLink to="/" primary="Home" icon={<InboxIcon />} />
        <ListItemLink to="/projects" primary="Projects" icon={<DraftsIcon />} />
        <ListItemLink to="/blog" primary="Blog" icon={<DraftsIcon />} />
      </List>
      <Divider />
      <List component="nav" aria-label="home projects blog about">
        <ListItemLink to="/about" primary="About" icon={<DraftsIcon />} />
      </List>
    </div>
  );

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer open={state.left} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)} >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}

export default TopNav;