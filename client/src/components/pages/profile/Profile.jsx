import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Tags from './Tags';
import TagSearch from '../TagSearch';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';




const Profile = (props) => {

    // this !props.user isn't currently working. The <Profile /> is still being rendered.
    if (!props.user) {
        return <Redirect to='/' />
    }

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <ProfileHeader user={props.user} updateUser={props.updateUser} />
                    <Tags user={props.user} />
                    {/* <ProfileDetails user={props.user}/> */}
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <TagSearch />
                    </Card>
                </Grid>
                    <ProfileDetails user={props.user} updateUser={props.updateUser} />
                <Grid>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;