import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import BASE_URL from '../../constants';


class Signup extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  storeInput = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, BASE_URL);

    axios.post(`${BASE_URL}/auth/signup`, this.state)
    .then(response => {
      console.log(response);

      localStorage.setItem('authToken', response.data.token)

      this.props.updateUser();

    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {

    if (this.props.user) {
      return <Redirect to='/profile' />
    }
 
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name: </label>
            <input name='firstname' type='text' placeholder='Your first name...' onChange={this.storeInput} />
            <label>Last Name: </label>
            <input name='lastname' type='text' placeholder='Your last name...' onChange={this.storeInput} />
            <label>Email: </label>
            <input name='email' type='email' placeholder='Your email address...' onChange={this.storeInput} />
            <label>Password: </label>
            <input name='password' type='password' placeholder='Your email address...' onChange={this.storeInput} />
          </div>
          <button type="submit">Register</button>

        </form>
      </div>
    )
  }
}

export default Signup;