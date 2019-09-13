import React from 'react';
import axios from 'axios';
import BASE_URL from '../../constants';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', this.state)

    axios.post(`${BASE_URL}/auth/login`, this.state)
    .then(response => {
      console.log(response.data);

      localStorage.setItem('authToken', response.data.token)

      this.props.updateUser();

    })
    .catch(err => {
      this.setState({
        message: `${err.response.status}: ${err.response.data.message}`
      })
    })

  }

  render() {
    if (this.props.user) {
      return <Redirect to='/profile' />
    }

    return (
      <div>
        <h2>Login</h2>
        <span className='red'>{this.state.message}</span>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <input name='email' type='email' placeholder='Your email address...' onChange={(e) => this.setState({ email: e.target.value, message: '' })} />
            <label>Password: </label>
            <input name='password' type='password' placeholder='Your email address...' onChange={(e) => this.setState({ password: e.target.value, message: '' })} />
          </div>
          <button type="submit">Login</button>

        </form>
      </div>
    )
  }
}

export default Login;