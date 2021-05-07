import React from 'react';
import styles from './styles/PageNav.module.css';

class PageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesCount: Math.ceil(this.props.productList / 4)
    }
    // bindings go here
  }

// methods here

  render() {
    //page button function
    const listItems = [];
    const generatePageButtons = () => {
      for (let i = 0; i < this.props.pagesCount; i++) {
        listItems.push(<li class="wt-action-group__item-container">
        <a className={styles.listItem} aria-current="page">
            <span className={styles.outerSpan}>Current page</span>
            <span className={styles.innerSpan}>1</span>
        </a>
      </li>)
      }
    }
    generatePageButtons();

    return (
      // <div>
      //   <div>This is the number of pages: {this.props.pagesCount}</div>
      //   <div>This is the current page: {this.props.currentPage}</div>
      // </div>

      <nav className={styles.navContainer}>
        <ul>
          {listItems}
        </ul>

      </nav>

    )
  }
}

export default PageNav;