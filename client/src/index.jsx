import React from 'react'
import ReactDOM from 'react-dom'
import ReviewsList from './ReviewsList.jsx';
import ReviewItem from './ReviewItem.jsx';
import PageNav from './PageNav.jsx';
import Tabs from './Tabs.jsx';
import Rating from './Rating.jsx';
import $ from 'jquery';
import styles from "./styles/index.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: 0,
      productsList: [],
      currentProduct: null,
      reviewsOrder: 'Recommended',
      currentPage: 1
    }
    this.changeOrder = this.changeOrder.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    console.log('change page called:', page);
    if (typeof page === 'number') {
      this.setState({
        currentPage: page
      })
    } else if (page === 'left') {
      this.setState({
        currentPage: this.state.currentPage === 1 ? this.state.currentPage : this.state.currentPage - 1
      })
    } else if (page === 'right') {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  changeOrder(order) {
    this.setState({
      reviewsOrder: order
    }, () => {
      console.log('updated reviews order:', this.state.reviewsOrder);
    })
  }

  componentDidMount() {
    const queryString = location.search.slice(8) || 1;
    $.ajax({
      type: 'GET',
      url: '/reviews/' + queryString,
      success: (product) => {
        console.log('successfully retrieved:', product);
        this.setState({
          itemId: product.itemId,
          currentProduct: product,
          overallRating: product.overallRating,
          reviewsOrder: 'Recommended', // <--- this is the default reviews order.
          currentPage: 1
        })
      },
      error: (err) => {
        console.log(err.statusText);
      }
    })
  }

  render() {
    return (
      <div className={styles.outerCol}>
        <div className={styles.innerCol} css="padding-left-30px">
          <div className={styles.reviewsPanel}>
            <div className="listing-page-reviews">
              {this.state.currentProduct !== null && this.state.overallRating !== null ? <Rating product={this.state.currentProduct} rating={this.state.overallRating}/> : <Rating product={null} /> }
              <div className="data-reviews">
                {/* --> TABS COMPONENT
                ... includes reviews for this item tab and reviews for this shop tab + sort feature */}
                {this.state.currentProduct !==null ? <Tabs selectOrder={this.changeOrder} selected={this.state.reviewsOrder} itemReviewsQuant={this.state.currentProduct ? this.state.currentProduct.itemReviewsQuant : 0} shopReviewsQuant={this.state.currentProduct ? this.state.currentProduct.shopReviewsQuant : 0}/> : <Tabs />}
                {/* --> REVIEWS LIST COMPONENT */}
                {this.state.currentProduct !== null ? <ReviewsList currentPage={this.state.currentPage} reviews={this.state.currentProduct.reviews} reviewsOrder={this.state.reviewsOrder}/> : <div>No reviews</div> }
              </div>
              <div className="nav-container">
                {/* {PAGE NAV COMPONENT} */}
                {this.state.currentProduct ? <PageNav pagesCount={Math.ceil(this.state.currentProduct.reviews.length / 4)} currentPage={this.state.currentPage} changePage={this.changePage} /> : null}
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;