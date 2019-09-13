import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Routes from "./components/Routes";
import BASE_URL from "./constants";

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    // see if there is a token in localStorage
    let token = localStorage.getItem("authToken");

    if (token) {
      // console.log(`token found: ${token}`)
      axios
        .get(`${BASE_URL}/auth/current/user`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
          this.setState({
            user: response.data.user
          });
          console.log(this.state);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ user: null });
    }
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Container >
              <Header />
              <Nav user={this.state.user} updateUser={this.getUser} />
              <Routes user={this.state.user} updateUser={this.getUser} />
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
