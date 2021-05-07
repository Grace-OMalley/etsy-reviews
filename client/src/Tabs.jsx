import React from 'react';
import styles from './styles/Tabs.module.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      showMenu: false,
      tab: 'item'
    }
    // bindings go here
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectOrder = this.selectOrder.bind(this);
    this.handleReviewsClick = this.handleReviewsClick.bind(this);

    this.ref = React.createRef();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

componentDidMount() {
  document.body.addEventListener('click', this.handleOutsideClick);
}

handleReviewsClick(event) {
  this.setState({
    tab: event.target.name
  }, () => {
    console.log('updated state tab:', this.state.tab)
  })
}

handleOutsideClick(event) {

  if (!event.target.classList.contains('dropdown')) {
    this.setState({
      showMenu: false
    })
  }
}

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
          <button name="item" className={`${styles.itemReviews} ${this.state.tab === 'item' ? styles.selectedTab : ''}`} onClick={this.handleReviewsClick}>
            Reviews for this item
            <span>{this.props.itemReviewsQuant}</span>
          </button>

          <button name="shop" className={`${styles.shopReviews} ${this.state.tab === 'shop' ? styles.selectedTab : ''}`} onClick={this.handleReviewsClick}>
            Reviews for this shop
            <span>200</span>
            </button>
      </div>

      <div className={styles.sortFeature} css="sort-feature">
        <div className={`${styles.sortMenu}`} css="sort-menu">
          <button className={`${styles.menuButton} ${toggleOff} dropdown`} onClick={this.toggleMenu} css="menu-button">
            <span className={`${styles.triggerLabel} dropdown`} css="trigger-label">Sort by: Recommended</span>
            <span className={`${styles.menuCaret} dropdown`} css="menu-trigger-caret">
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon></svg>
            </span>
          </button>
          <div className={`${styles.dropdown} ${conditionalClass} dropdown`} css="dropdown" ref={this.ref}>
            <button onClick={this.selectOrder} name="recommended" className={`${styles.dropdownItem} ${this.props.selected === 'recommended' ? styles.selected : ''} dropdown`}>Recommended</button>
            <button onClick={this.selectOrder} name="newest" className={`${styles.dropdownItem} ${this.props.selected === 'newest' ? styles.selected : ''} dropdown`}>Newest</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Tabs;