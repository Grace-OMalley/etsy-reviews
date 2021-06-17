import React from 'react';
import styles from './styles/PageNav.module.css';

class PageNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(event) {
  if (event.target.id !== 'arrow') {
    this.props.changePage(Number(event.target.id));
  }

  if (event.target.classList.contains('right') && this.props.currentPage < this.props.pagesCount) {
    this.props.changePage('right')
  } else if (event.target.classList.contains('left')) {
    this.props.changePage('left')
  }
}

  render() {
    const listItems = [];
    const generatePageButtons = () => {
      const middlePage = this.props.currentPage > 2 && this.props.currentPage < this.props.pagesCount;
      const lastPage = this.props.currentPage === this.props.pagesCount;

      for (let i = 0; i < this.props.pagesCount; i++) {
        const currentPage = this.props.currentPage === (i + 1) ? styles.selectedPage : ''

        if (!middlePage) {
          if (i < 2 || i === this.props.pagesCount - 1) {
          listItems.push(<li key={i} className={`${styles.listItem}`}>
          <a className={`${styles.anchorTag} ${currentPage}`} id={i + 1} onClick={this.handleClick} aria-current="page">
            {i + 1}
          </a>
        </li>)
          }
        } else {
          if (i === 0 || i === this.props.currentPage - 1 || i === this.props.pagesCount - 1) {
            listItems.push(<li key={i} className={`${styles.listItem}`}>
            <a className={`${styles.anchorTag} ${currentPage}`} id={i + 1} onClick={this.handleClick} aria-current="page">
              {i + 1}
            </a>
          </li>)
          }
        }
      }

      if (listItems.length > 1) {
        listItems.push(<li id="arrow" onClick={this.handleClick} className={`${styles.listItem} ${'right'}`}><svg className={`${styles.myArrow} ${'right'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="right" d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path></svg></li>)

        listItems.unshift(<li onClick={this.handleClick} className={`${styles.listItem} ${'left'}`}><svg className={`${styles.myArrow} ${'left'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="left" d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z"></path></svg></li>)

        if (middlePage) {
        listItems.splice(2, 0, <li><p>...</p></li>);
        listItems.splice(4, 0, <li><p>...</p></li>);
        } else if (lastPage && this.props.pagesCount > 3) {
          listItems.splice(-2, 0, <li><p>...</p></li>);
        } else if (this.props.pagesCount > 3) {
          listItems.splice(3, 0, <li><p>...</p></li>);
        }
      }
    }
    generatePageButtons();

    return (
      <nav className={styles.navContainer}>
        <ul className={styles.list}>
          {listItems}
        </ul>
      </nav>
    )
  }
}

export default PageNav;