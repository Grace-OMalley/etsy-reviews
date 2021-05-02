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
          <button>
            Reviews for this item
            <span>200</span>
          </button>

          <button>
            Reviews for this shop
            <span>200</span>
            </button>
      </div>

      <div className={styles.sortFeature} css="sort-feature">

        <div className={styles.sortMenu} css="sort-menu">
          <button>
            <span className={styles.triggerLabel} css="trigger-label">Sort by: Recommended</span>
            <span className={styles.menuCaret} css="menu-trigger-caret">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg>
            </span>
          </button>
        </div>

      </div>

    </div>

    )
  }
}

export default Tabs;