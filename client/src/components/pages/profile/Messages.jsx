import React from 'react'

class Messages extends React.Component {
    state = {
        msgHistory: false,

    }

    // newMessageCheck = () => {
    //     if (msgHistory) {
            
    //     }
    //     else {

    //     }
    // }

    // componentDidMount() {
    //     newMessageCheck()
    // }
    
    render() {
        return (
            <div>
                <h2>Messages</h2>
                <p>You have no new messages</p>
            </div>
        )
    }
}

export default Messages