import React from 'react';

const Home = (props) => {

  if (!props.user._id) {
    return (
      <div>
        <p>Unauthenticated Home</p>
        <ul>
          <li>Add Hero images (maybe 2 or 3)</li>
          <li>Add some content about what it is.</li>
          <li>Add some content about how to get started.</li>
          <li>Maybe put a Signup button on in the call to action.</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        Authenticated Home
      </div>
    )
  }
}

export default Home;