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
        bio: true,
        editBio: false,
        text: "",
        reviews: false,
        messages: false,
        projects: false
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.user.firstname != this.props.user.firstname){
            this.setState({
                text: this.props.user.bio
            })
        }
    }

    changeContentToBio = (e) => {
        // update the state to render the correct component
        this.setState({ 
            bio: true,
            reviews: false,
            messages: false,
            projects: false
        })
    }

    changeContentToReviews = (e) => {
        // update the state to render the correct component
        this.setState({ 
            bio: false,
            reviews: true,
            messages: false,
            projects: false
        })
    }

    changeContentToMessages = (e) => {
        // update the state to render the correct component
        this.setState({ 
            bio: false,
            reviews: false,
            messages: true,
            projects: false
        })
    }

    changeContentToProjects = (e) => {
        // update the state to render the correct component
        this.setState({ 
            bio:false,
            reviews: false,
            messages: false,
            projects: true
        })
    }

    editBio = (e) => {
        console.log("edit me!")
        // Take me to the BioEdit component
        this.setState({
            bio: false,
            editBio: true
        })
        console.log("I made it!")
    }

    handleTextInput = (e) => {
		this.setState({
			text: e.target.value
		})
	}

    updateBio = (e) => {
        console.log("update me!")
        console.log(this.state.text)
        // Save the new bio into the users db credentials
        axios.put(`${BASE_URL}/profiles/` + this.props.user._id, this.state.text, {
            headers: { 'Authorization' : `Bearer ${localStorage.getItem('authToken')}`}
        })
        .then(response => {
            console.log(response);

            this.props.updateUser();
        })
        // Go back to the Bio component that just shows the text
        this.setState({
            bio: true,
            editBio: false
        })
        console.log("All done master!")
    }

    render () {
        let content;

        if (this.state.bio === true) {
            content = (
                <Bio user={this.props.user} editBio={this.editBio}/>
            )
        } else if (this.state.reviews === true) {
            content = (
                <Reviews />
            )
        } else if (this.state.messages === true) {
            content = (
                <Messages />
            )
        } else if (this.state.projects === true) {
            content = (
                <Projects />
            )
        } else if (this.state.editBio === true) {
            content = (
                <BioEdit value={this.state.text} handleTextInput={this.handleTextInput} updateBio={this.updateBio}/>
            )
        }
        return (
            <div className="profileDetails">
                <span>
                    <li>
                        <a onClick={this.changeContentToBio}>Bio</a>
                    </li>
                    <li>
                        <a onClick={this.changeContentToProjects}>Projects</a>
                    </li>
                    <li>
                        <a onClick={this.changeContentToReviews}>Reviews</a>
                    </li>
                    <li>
                        <a onClick={this.changeContentToMessages}>Messages</a>
                    </li>
                </span>
                <div>
                    {content}
                </div>
            </div>
            
        )
    }
}

export default ProfileDetails