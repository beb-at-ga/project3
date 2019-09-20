import React from 'react'

import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const Tags = (props) => {

  const classes = useStyles();

  let mentorTag;
  let menteeTag;

  if (props.user.mentorTag && props.user.menteeTag) {
    mentorTag = props.user.mentorTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} color="primary" />)
    menteeTag = props.user.menteeTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} color="secondary" />)
  } else if (props.user.menteeTag) {
    menteeTag = props.user.menteeTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} color="secondary" />)
  } else if (props.user.mentorTag) {
    mentorTag = props.user.mentorTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} color="primary" />)
  } else {
  }

  return (
    <div>
      <Box >
        {mentorTag}
        {menteeTag}
      </Box>
    </div>
  )
}

export default Tags;