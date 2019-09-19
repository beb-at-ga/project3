import React from 'react';

// Import Custom Components
import ProfileHeaderEdit from './ProfileHeaderEdit';

// Material-UI Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

const ProfileHeader = (props) => {
    let profilePic = '';
    if (props.user.profilePic) {
        profilePic = <img src={props.user.profilePic} alt='profile'></img>
    } else {
        profilePic = <img src='http://placegoat.com/100/100' alt='profile'></img>
    }
    return (
        <Box >
            <div className='profileHeaderEdit'>
                <h1>{props.user.firstname} {props.user.lastname}</h1>
                <ProfileHeaderEdit user={props.user} updateUser={props.updateUser} />
            </div>
            <Grid container spacing={3}>
                <Grid item xs >
                    {profilePic}
                </Grid>
                <Grid item xs>
                    <p>Email: {props.user.email}</p>
                </Grid>
                <Grid item xs={6}>
                    <a href='htts://www.google.com'>Google</a>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProfileHeader;

