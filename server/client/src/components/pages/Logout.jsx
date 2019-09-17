import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    props.updateUser()
  }

  useEffect(() => {
    handleLogout();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Redirect to="/" />
  )
}

export default Logout;