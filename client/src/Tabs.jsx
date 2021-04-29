import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    }
    // bindings go here
  }

// methods here

  render() {
    return (
      <div className="tabs-container" css="margin-bottom-18px">
        This is the Tabs div!
      </div>
    )
  }
}

export default Tabs;