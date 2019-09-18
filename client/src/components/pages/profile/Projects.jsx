import React from 'react'

const Projects = props => {
	return (
		<div>
			<h2>Projects</h2>
			<div>
				{props.user.projects}
			</div>
			<button onClick={props.editBio}>Edit</button>
		</div>
	)
}

export default Projects