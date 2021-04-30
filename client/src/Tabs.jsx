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

      <div className="tabs-list">
        {/* This is the Tabs div! */}
        <button>listing reviews tab--span goes in here</button>
        <button>shop reviews tab--span goes in here</button>
      </div>

      <div className="sort-feature" css="justify-content-flex-end">

        <div className="sort-menu" css="justify-content-inline-flex position-relative">
          <button>
            <span className="trigger-label">Sort by: Recommended</span>
            <span className="menu-trigger-caret">caret svg here w/polygon</span>
          </button>
        </div>

      </div>

    </div>

    )
  }
}

export default Tabs;