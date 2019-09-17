import React from 'react'

class BioEdit extends React.Component {
	state ={
		text: this.props.value
	}
	handleTextInput = (e) => {
		this.setState({
		  text: e.target.value
		})
	}

	render() {
		return (
			<div>
				<h2>Edit Bio</h2>
					<textarea
						value={this.state.text}
						onChange={this.handleTextInput}
					/>
				<button onClick={() => { this.props.updateBio(this.state.text) }}>Update</button>
			</div>
		)
	}
}

export default BioEdit