import React from 'react';
import axios from 'axios';
import Bio from './Bio';
import Projects from './Projects';
import Reviews from './Reviews';
import Messages from './Messages';
import BioEdit from './BioEdit';
import BASE_URL from '../../../constants';

class ProfileDetails extends React.Component {
  state = {
    currentTab: 'bio'
  }

  changeContentToBio = (e) => {
    // update the state to render the correct component
    this.setState({
      currentTab: 'bio'
    })
  }

  changeContentToReviews = (e) => {
    // update the state to render the correct component
    this.setState({
      currentTab: 'reviews'
    })
  }

  changeContentToMessages = (e) => {
    // update the state to render the correct component
    this.setState({
      currentTab: 'messages'
    })
  }

  changeContentToProjects = (e) => {
    // update the state to render the correct component
    this.setState({
      currentTab: 'projects'
    })
  }

  changeContentToEditBio = (e) => {
    // Take me to the BioEdit component
    this.setState({
      currentTab: 'editBio'
    })
  }

  editBio = (e) => {
    // Take me to the BioEdit component
    this.setState({
      currentTab: 'editBio'
    })
  }

  updateBio = (text) => {
    let body = {
      bio: text
    }
    // Save the new bio into the users db credentials
    axios.put(`${BASE_URL}/profiles/${this.props.user._id}`, body, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
    })
      .then(response => {
        console.log(response);
        // saving the new token so that the user's edits will be rendered
        localStorage.setItem('authToken', response.data.token);
        this.props.updateUser();

        // Go back to the Bio component that just shows the text
        this.setState({
          currentTab: 'bio'
        })
        console.log("All done master!")
      })
  }

  render() {
    let content;

    switch (this.state.currentTab) {
      case 'bio':
        content = <Bio userBio={this.props.user ? this.props.user.bio : ''} editBio={this.editBio} />
        break;
      case 'reviews':
        content = <Reviews />
        break;
      case 'editBio':
        content = <BioEdit value={this.props.user ? this.props.user.bio : ''} updateBio={this.updateBio} />
        break;
      case 'projects':
        content = <Projects />
        break;
      case 'messages':
        content = <Messages />
        break;
      default:
        content = <div>You should not get here - check spelling</div>
    }

    return (
      <div className="profileDetails">
        <span>
          <li onClick={this.changeContentToBio}>Bio </li>
          <li onClick={this.changeContentToProjects}>Projects </li>
          <li onClick={this.changeContentToReviews}>Reviews </li>
          <li onClick={this.changeContentToMessages}>Messages </li>
        </span>
        <div>
          {content}
        </div>
      </div>
    )
  }
}

export default ProfileDetails