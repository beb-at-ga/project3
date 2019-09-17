import React from 'react'

const Bio = props => {
	// updateBioContent = (e) => {
	// 	// Take the current bio content and update it to the typed in content
	// }

	return (
		<div>
			<h2>Bio</h2>
			<div>
				{props.user.bio}
			</div>
			<button onClick={props.editBio}>Edit</button>
		</div>
	)
}

export default Bio