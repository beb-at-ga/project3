import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    //remove jwt from local storage or cookies
    localStorage.removeItem('authToken');
    //update the state of the app
    this.props.updateUser()

  }

  render() {

    let links = '';

    if (this.props.user) {
      links = (
        <>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/' onClick={this.handleLogout}>Logout</Link>
          </li>
        </>
      )
    } else {
      links = (
        <>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </>
      )
    }

    return (
      <nav>
        // TODO: add materialize-ui drawer to left side for better mobile access.
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {links}
        </ul>
      </nav>
    )
  }
}

export default Nav;

