import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    }
    // bindings go here
  }

// methods here

  render() {
    return (
      <div>This is the Rating div!</div>
    )
  }
}

export default Rating;