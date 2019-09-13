import React from 'react'

const Bio = props => {
	if (props.user.bio === '') {
		// Return a message to edit the bio
		
	}
	else {
		// Return bio 
	}


	return (
		<div>
			<h2>Bio</h2>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Bio:</label>
					<input name="bio" type="text" />
				</div>
			</form>
			<button type="submit">Update Bio!</button>
		</div>
	)
}

export default Bio