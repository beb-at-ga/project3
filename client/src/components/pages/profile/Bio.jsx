import React from 'react'

const Bio = props => {
	return (
		<div>
			<h2>Bio</h2>
			<div>
				{props.userBio}
			</div>
			<button onClick={props.editBio}>Edit</button>
		</div>
	)
}

export default Bio