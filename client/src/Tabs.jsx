import React from 'react';
import styles from './styles/Tabs.module.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      showMenu: false
    }
    // bindings go here
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectOrder = this.selectOrder.bind(this);

  }

// methods here

selectOrder(event) {
  console.log('button name:', event.target.name);
  this.props.selectOrder(event.target.name);
}

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    }, () => console.log('menu button clicked:', this.state.showMenu))
  }

  render() {
    const conditionalClass = this.state.showMenu ? styles.menuOn : styles.menuOff;
    const toggleOff = this.state.showMenu === false ? styles.toggleOff : '';

    return (
      <div className={styles.tabsContainer} css="tabs-container">
        <div className={styles.tabsList} css="tabs-list">
          {/* This is the Tabs div! */}
          <button>
            Reviews for this item
            <span>{this.props.itemReviewsQuant}</span>
          </button>

          <button>
            Reviews for this shop
            <span>200</span>
            </button>
      </div>

      <div className={styles.sortFeature} css="sort-feature">
        <div className={`${styles.sortMenu} ${toggleOff}`} css="sort-menu">
          <button className={styles.menuButton} onClick={this.toggleMenu}>
            <span className={styles.triggerLabel} css="trigger-label">Sort by: Recommended</span>
            <span className={styles.menuCaret} css="menu-trigger-caret">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg>
            </span>
          </button>
          <div className={`${styles.dropdown} ${conditionalClass}`}>
            <button onClick={this.selectOrder} name="recommended" className={`${styles.dropdownItem} ${this.props.selected === 'recommended' ? styles.selected : ''}`}>Recommended</button>
            <button onClick={this.selectOrder} name="newest" className={`${styles.dropdownItem} ${this.props.selected === 'newest' ? styles.selected : ''}`}>Newest</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Tabs;