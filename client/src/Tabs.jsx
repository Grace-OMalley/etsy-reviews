import React from 'react';
import styles from './styles/Tabs.module.css';

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

      <div className={styles.tabsContainer} css="tabs-container">

      <div className={styles.tabsList} css="tabs-list">
        {/* This is the Tabs div! */}
        <button>Reviews for this item</button>
        <button>Reviews for this shop</button>
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