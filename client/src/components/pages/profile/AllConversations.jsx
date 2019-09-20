import React from 'react';

// Imports for Material-UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));



export default function AlignItemsList(props) {
  const classes = useStyles();

  let profilePic = '';
  if (props.user.profilePic) {
    profilePic = props.user.profilePic;
  } else {
    profilePic = 'http://placegoat.com/150/150';
  }

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="user's photo" src={profilePic} />
        </ListItemAvatar>
        <ListItemText
          primary="Mentoring in Node.js!"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Ali Connors
              </Typography>
              {" I would love to help mentor you in Node.js!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="user's photo" src={profilePic} />
        </ListItemAvatar>
        <ListItemText
          primary="Mentoring in Express"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Martin Sanchez
              </Typography>
              {" Express is one of my strong suits. I've worked with it..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="user's photo" src={profilePic} />
        </ListItemAvatar>
        <ListItemText
          primary="Material-UI"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Sandra Adams
              </Typography>
              {' I know it looks intimidating at first, but with a little...'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}