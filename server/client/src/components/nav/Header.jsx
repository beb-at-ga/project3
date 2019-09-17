import React from 'react';
import Nav from './Nav';

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

const Header = (props) => {


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