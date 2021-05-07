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
      productsList: [],
      currentProduct: null,
      reviewsOrder: 'recommended',
      currentPage: 1
    }
    // bindings go here
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeOrder(order) {
    this.setState({
      reviewsOrder: order
    }, () => {
      console.log('updated reviews order:', this.state.reviewsOrder);
    })
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/findOne',
      success: (product) => {
        console.log('successfully retrieved:', product);
        this.setState({
          currentProduct: product
        })
      }
    })
  }

  render() {
    return (
      <div className={styles.outerCol}>
        {/* Outermost col */}
        <div className={styles.innerCol} css="padding-left-30px">
          {/* inner reviews col */}
          <div className={styles.reviewsPanel}>
            {/* reviews panel--encompasses reviews AND photo bank */}
            <div className="listing-page-reviews">
              {/* <p>does NOT encompass photo bank</p> */}
              {this.state.currentProduct !== null ? <Rating product={this.state.currentProduct}/> : null }
              <div className="data-reviews">
                {/* --> TABS COMPONENT GOES HERE
                ... includes reviews for this item tab and reviews for this shop tab + sort feature */}
                <Tabs selectOrder={this.changeOrder} selected={this.state.reviewsOrder} itemReviewsQuant={this.state.currentProduct ? this.state.currentProduct.itemReviewsQuant : 0}/>

                {/* --> REVIEWS LIST COMPONENT GOES HERE */}
                {this.state.currentProduct !== null ? <ReviewsList currentPage={this.state.currentPage} reviews={this.state.currentProduct.reviews} reviewsOrder={this.state.reviewsOrder}/> : null }
              </div>

              <div className="nav-container">
                {this.state.currentProduct ? <PageNav pagesCount={Math.ceil(this.state.currentProduct.reviews.length / 4)} currentPage={this.state.currentPage} /> : null}
              </div>
            </div>

            PHOTO BANK HERE
          </div>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));