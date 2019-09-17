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
    backgroundColor: 'lightgray',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer position="fixed" className={classes.footer}>
      <Box textAlign="center" maxWidth="sm">
              <span>
                  <li>
                      <Link to="/about">About Us</Link>
                  </li>
                  <li>
                      <Link to="/userguide">User Guide</Link>
                  </li>
                  <li>
                      <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                      <Link to="/privacy">Privacy Policy</Link>
                  </li>
              </span>
      </Box>
      <Box textAlign="center" maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Box>
    </footer>
  );
}

export default Footer;