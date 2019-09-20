import React from 'react'
import axios from 'axios';
import BioEdit from './BioEdit';
import BASE_URL from '../../../constants';

// Material-UI Components
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create'

class Bio extends React.Component {
	state = {
		currentTab: 'bio'
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
		// saving the new token so that the user's edits will be rendered
		localStorage.setItem('authToken', response.data.token);
		this.props.updateUser();

		// Go back to the Bio component that just shows the text
		this.setState({
			currentTab: 'bio'
		})
	})
	}

	render () {
		let header;
		let content;
		let button;

		switch (this.state.currentTab) {
			case 'bio':
			  content = this.props.user.bio
			  header = <h2>Bio</h2>
			  button = <Button onClick={this.editBio} color="primary"><CreateIcon /></Button>
			  break;
			case 'editBio':
			  content = <BioEdit value={this.props.user ? this.props.user.bio : ''} updateBio={this.updateBio} />
			  header = <h2>Edit Bio</h2>
			  break;
			default:
			  content = <div>You should not get here - check spelling</div>
		  }

		return (
			<div>
				{header}
				<div>
					{content}
				</div>
				<br />
				{button}
			</div>
		)
	}
}

export default Bio