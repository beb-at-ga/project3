import React, { useEffect } from 'react'

import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles'

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
    console.log('found both')
    mentorTag = props.user.mentorTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} />)
    menteeTag = props.user.menteeTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} />)
  } else if (props.user.menteeTag) {
    console.log('found mentee')
    menteeTag = props.user.menteeTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} />)
  } else if (props.user.mentorTag) {
    console.log('found mentor')
    mentorTag = props.user.mentorTag.map((tag, idx) => <Chip label={tag} className={classes.chip} key={idx} />)
  } else {
    console.log('found nothing')
  }

  // switch (true) {
  //   case (props.user.mentorTag > 0):

  //     // mentorTag = <p>mentor tags</p>
  //   case (props.user.menteeTag > 0):
  //     console.log('Mentee Tags Found')
  //     // menteeTag = <p>mentee tags</p>
  //     break;
  //   default:
  //     console.log(`Oh! That isn't right...`)
  //     console.log(props.user.mantorTag[0]);
  //     break;
  // }

  return (
    <div>
      {mentorTag}
      {menteeTag}
    </div>
  )
}

export default Tags;