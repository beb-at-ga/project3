import React from 'react';
import Bio from './Bio'
import Projects from './Projects'
import Reviews from './Reviews';
import Messages from './Messages'

class ProfileDetails extends React.Component {
    state = {
        bio: true,
        reviews: false,
        messages: false,
        projects: false
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
            bio: false,
            reviews: false,
            messages: false,
            projects: true
        })
    }

    render () {
        let content;

        if (this.state.bio === true) {
            content = (
                <Bio />
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