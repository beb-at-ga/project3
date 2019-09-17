import React from 'react'

const BioEdit = props => {
	return (
		<div>
			<h2>Edit Bio</h2>
				<textarea
					value={props.value}
					onChange={props.handleTextInput}
				 />
			<button onClick={props.updateBio}>Update</button>
		</div>
		
		
		
	)
}

export default BioEdit