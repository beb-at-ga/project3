import React from 'react'
import AllConversations from './AllConversations'
import CurrentConversation from './CurrentConversation'
import Grid from '@material-ui/core/Grid';

class Messages extends React.Component {
    state = {
        msgHistory: false,

    }
    
    render() {
        return (
            <div>
                <h2>Messages</h2>
                <Grid container direction="row" justify="center" alignItems="stretch">
                    <Grid >
                        <AllConversations />
                    </Grid>
                    <Grid >
                        <CurrentConversation />
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default Messages