import React from 'react'
import axios from 'axios'
import BASE_URL from '../../constants';

import ContactModal from './ContactModal';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText'

class TagSearch extends React.Component {
  state = {
    tagsInput: '',
    mentors: [],
    mentees: [],
    searchInitiated: false
  }

  handleChange = (e) => {
    this.setState({ searchInitiated: false })
    this.setState({ tagsInput: e.target.value })
  }

  searchList = (e) => {
    e.preventDefault()
    let token = localStorage.getItem('authToken')
    let trimmedStrings = e.target.search.value.split(',').map(str => str.trim())

    this.setState({
      searchInitiated: true
    });

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

    const classes = makeStyles(theme => ({
      root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 1000,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width: 1000
      },
      iconButton: {
        padding: 2,
      },
    }));

    let mentorsList = (this.state.mentors.map((m, i) => {
      return (
        <ul key={i}>
          <li>
            <ContactModal recip={m} sender={this.props.user} /> {m.mentorTag.join(', ')}
          </li>
        </ul>
      )
    }))

    let menteesList = (this.state.mentees.map((m, i) => {
      return (
        <ul key={i}>
          <li>
            <ContactModal recip={m} sender={this.props.user} /> {m.menteeTag.join(', ')}
          </li>
        </ul>
      )
    }))

    if (this.state.mentees.length > 0 && this.state.mentors.length > 0) {
      return (
        <div>
          <Grid container justify="center" alignItems="center">
            <Paper className={classes.root} >
              <form onSubmit={this.searchList}>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>

                <InputBase
                  className={classes.input}
                  placeholder="Search for skills"
                  inputProps={{ 'aria-label': 'find mentor mentee' }}
                  margin="dense" id="tag-search" label="Tag Search"
                  type="text" name='search' value={this.state.tagsInput} onChange={this.handleChange}
                />

                <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
          </Grid>
          <DialogContent>
            <DialogContentText>Looking for a mentor?</DialogContentText>
            <DialogContentText>{mentorsList}</DialogContentText>
            <DialogContentText>Looking for a mentee?</DialogContentText>
            <DialogContentText>{menteesList}</DialogContentText>
          </DialogContent>
        </div>
      )
    } else if (this.state.mentees.length > 0 && this.state.mentors.length <= 0) {
      return (
        <div>
          <Grid container justify="center" alignItems="center">
            <Paper className={classes.root}>
              <form onSubmit={this.searchList}>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>

                <InputBase
                  className={classes.input}
                  placeholder="Search for skills"
                  inputProps={{ 'aria-label': 'find mentor mentee' }}
                  margin="dense" id="tag-search" label="Tag Search"
                  type="text" name='search' value={this.state.tagsInput} onChange={this.handleChange}
                />
                <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
          </Grid>
          <DialogContent>
            <DialogContentText>We couldn't find any mentors, but these folks are also looking for this skill.</DialogContentText>
            <DialogContentText>{menteesList}</DialogContentText>

          </DialogContent>
        </div>
      )
    } else if (this.state.mentees.length <= 0 && this.state.mentors.length > 0) {
      return (
        <div>
          <Grid container justify="center" alignItems="center">
            <Paper className={classes.root}>
              <form onSubmit={this.searchList}>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>

                <InputBase
                  className={classes.input}
                  placeholder="Search for skills"
                  inputProps={{ 'aria-label': 'find mentor mentee' }}
                  margin="dense" id="tag-search" label="Tag Search"
                  type="text" name='search' value={this.state.tagsInput} onChange={this.handleChange}
                />

                <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
          </Grid>
          <DialogContent>
            <DialogContentText>We found these mentors, but couldn't find any other mentees.</DialogContentText>
            <DialogContentText>{mentorsList}</DialogContentText>
          </DialogContent>
        </div>
      )
    } else if (this.state.mentees.length <= 0 && this.state.mentors.length <= 0) {
      return (
        <div>
          <Grid container justify="center" alignItems="center">
            <Paper className={classes.root}>
              <form onSubmit={this.searchList}>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>

                <InputBase
                  className={classes.input}
                  placeholder="Search for skills"
                  inputProps={{ 'aria-label': 'find mentor mentee' }}
                  margin="dense" id="tag-search" label="Tag Search"
                  type="text" name='search' value={this.state.tagsInput} onChange={this.handleChange}
                />
                <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
          </Grid>
          <DialogContent>
            <DialogContentText><h3>Want to teach or learn something new? Start your search today!</h3></DialogContentText>
          </DialogContent>
        </div>
      )
    } else {
      return (
        <div>
          <Grid container justify="center" alignItems="center">
            <Paper className={classes.root}>
              <form onSubmit={this.searchList}>
                <IconButton className={classes.iconButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>

                <InputBase
                  className={classes.input}
                  placeholder="Search for skills"
                  inputProps={{ 'aria-label': 'find mentor mentee' }}
                  margin="dense" id="tag-search" label="Tag Search"
                  type="text" name='search' value={this.state.tagsInput} onChange={this.handleChange}
                />
                <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
          </Grid>
        </div>
      )
    }
  }
}

export default TagSearch