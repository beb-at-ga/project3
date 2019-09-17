import React from 'react'
import axios from 'axios'
import BASE_URL from '../../constants';



class  TagSearch extends React.Component {

    state = {
        tagsInput: ''
    }

    handleChange = (e) => {
        this.setState({tagsInput: e.target.value})
    }

    searchList = (e) => {
        e.preventDefault()
        let token = localStorage.getItem('authToken')
        let trimmedStrings = this.state.tagsInput.split(',').map(str => str.trim())

        axios.post(`${BASE_URL}/profiles/search`, 
            {
            tags: trimmedStrings
            }, 
            {
                headers: { 'Authorization': `Bearer ${token}` }
            })
        .then(response => {
            console.log('SUCCESS', response.data)
        })
    }
    render () {
    return(
        <div>
            <form onSubmit={this.searchList}>
                <label for="tag-search">Tag Search:</label>
                <input type="text" name="tag-search" value={this.state.tagsInput} onChange={this.handleChange}/>
                <button type="submit" />
            </form>
            <hr />
            <p>{this.searchList}</p>
        </div>
        )
    }
}

export default TagSearch