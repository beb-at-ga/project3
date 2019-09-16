import React from 'react';

const Home = (props) => {


  if (!props.user._id) {
    return (
      <div>
        Unauthenticated Home
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