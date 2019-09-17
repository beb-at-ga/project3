import React from 'react';
import Nav from './Nav';

import Toolbar from '@material-ui/core/Toolbar';

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