import React from 'react';
import styles from './styles/PageNav.module.css';

class PageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesCount: Math.ceil(this.props.productList / 4),
      currentPage: this.props.currentPage
    }
    // bindings go here
    this.handleClick = this.handleClick.bind(this);

  }

// methods here

handleClick(event) {
  //do stuff
  // console.log('handle click called:', event.target);

  if (event.target.id) {
    this.props.changePage(Number(event.target.id));
  }

  if (event.target.classList.contains('right')) {
    this.props.changePage('right')
    // console.log('right arrow');
  } else if (event.target.classList.contains('left')) {
    this.props.changePage('left')

    // console.log('left arrow');
  }

}


  render() {

    //page button function
    const listItems = [];
    const generatePageButtons = () => {
      const middlePage = this.props.currentPage > 2 || this.props.currentPage < this.props.pageCount - 1;

      for (let i = 0; i < this.props.pagesCount; i++) {
        const currentPage = this.props.currentPage === (i + 1) ? styles.selectedPage : ''
        // console.log('i + 1:', i + 1 );
        // console.log('current page:', this.props.currentPage);
        // console.log('equal:', i + 1 === this.props.currentPage);

        if (!middlePage) {
          if (i < 2 || i === this.props.pagesCount - 1) {
          listItems.push(<li className={`${styles.listItem}`}>
          <a className={`${styles.anchorTag} ${currentPage}`} id={i + 1} onClick={this.handleClick} aria-current="page">
            {i + 1}
          </a>
        </li>)
          }
        } else {
          if (i === 0 || i === this.props.currentPage - 1 || i === this.props.pagesCount - 1) {
            listItems.push(<li className={`${styles.listItem}`}>
            <a className={`${styles.anchorTag} ${currentPage}`} id={i + 1} onClick={this.handleClick} aria-current="page">
              {i + 1}
            </a>
          </li>)
          }
        }

      }

      if (listItems.length > 1) {
        listItems.push(<li id="arrow" onClick={this.handleClick} className={`${styles.listItem} ${'right'}`}><svg className={`${styles.myArrow} ${'right'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="right" d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path></svg></li>)

        listItems.unshift(<li onClick={this.handleClick} className={`${styles.listItem} ${styles.test} ${'left'}`}><svg className={`${styles.myArrow} ${'left'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="left" d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z"></path></svg></li>)

        if (middlePage) {
          console.log('You are on a middle page. Congrats!');
        listItems.splice(2, 0, <li><p>...</p></li>);
        listItems.splice(4, 0, <li><p>...</p></li>);
        } else {
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