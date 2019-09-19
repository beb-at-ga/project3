import React from 'react'
import axios from 'axios'
import BASE_URL from '../../constants';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import ContactModal from './ContactModal';


class TagSearch extends React.Component {

  state = {
    tagsInput: '',
    mentors: [],
    mentees: []

  }

  handleChange = (e) => {
    this.setState({ tagsInput: e.target.value })
  }

  searchList = (e) => {
    e.preventDefault()
    let token = localStorage.getItem('authToken')
    let trimmedStrings = this.state.tagsInput.split(',').map(str => str.trim())

    axios.post(`${BASE_URL}/profiles/search`, {
      tags: trimmedStrings
    }, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(response => {

        let mentors = [];
        let mentees = [];

        // process mentors
        response.data.foundUsers.forEach(user => {

          user.mentorTag.forEach(tag => {
            trimmedStrings.forEach(s => {
              if ((tag.search(new RegExp(s)) >= 0)) {
                if ((mentors.indexOf(user) === -1) && !(user._id === this.props.user._id)) { mentors.push(user) }
              }
            })
          })

          // process mentees
          user.menteeTag.forEach(tag => {
            trimmedStrings.forEach(s => {
              if ((tag.search(new RegExp(s)) >= 0)) {
                if ((mentees.indexOf(user) === -1) && !(user._id === this.props.user._id)) { mentees.push(user) }
              }
            })
          })
        })

        this.setState({ mentors: mentors, mentees: mentees })
      })
  }
  render() {
    let mentorsList = (this.state.mentors.map((m, i) => {
      return (
        <ul key={i}>
          <li>
            <ContactModal recip={m} sender={this.props.user} /> -- {m.mentorTag.join(', ')}
          </li>
        </ul>
      )
    }))

    let menteesList = (this.state.mentees.map((m, i) => {
      return (
        <ul key={i}>
          <li>
            <ContactModal recip={m} sender={this.props.user} /> -- {m.menteeTag.join(', ')}
          </li>
        </ul>
      )
    }))

    return (
      <div>
        <form onSubmit={this.searchList}>
          <TextField margin="dense" id="tag-search" label="Tag Search"
            type="text" name='lastname' value={this.state.tagsInput} onChange={this.handleChange}
          />
          {/* <label htmlFor="tag-search">Tag Search:</label>
                <input type="text" name="tag-search" value={this.state.tagsInput} onChange={this.handleChange} /> */}
          <Button type="submit" color="primary">Search Tags</Button>
        </form>
        <h3>Here is a List of Mentors: </h3>
        <h4>{mentorsList}</h4>
        <h3>Here is a List of Other Mentees: </h3>
        <h4>{menteesList}</h4>
      </div>
    )
  }
}

export default TagSearch