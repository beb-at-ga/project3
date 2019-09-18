import React from 'react';
import { useStyles } from '../../theme';


import PrivacyPolicy from '../pages/PrivacyPolicy';
import About from '../pages/About';
import UserGuide from '../pages/UserGuide';
import Faq from '../pages/Faq';


import Typography from '@material-ui/core/Typography';
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

const Footer = () => {
  const classes = useStyles();

  return (
    <footer position="fixed" className={classes.footer} >
      <Box >
        <div className='footerButtons'>
          <About />
          <Faq />
          <UserGuide />
          <PrivacyPolicy />
        </div>
      </Box>
      <Box textAlign="center" maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Box>
    </footer>
  );
}

export default Footer;