import React from 'react'

// Material-UI Components
import Button from '@material-ui/core/Button';


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
				<textarea
					value={this.state.text}
					onChange={this.handleTextInput}
				/>
				<br />
				<Button onClick={() => { this.props.updateBio(this.state.text) }} color="primary">Update</Button>
			</div>
		)
	}
}

export default BioEdit