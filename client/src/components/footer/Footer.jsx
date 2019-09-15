import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        peer2here.com,
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box textAlign="center" maxWidth="sm">
      I'm a sad, empty footer. I need links to good content!
      </Box>
      <Box textAlign="center" maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Box>
    </footer>
  );
}

export default Footer;