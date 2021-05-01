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
      currentProduct: null
    }
    // bindings go here
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
                <Tabs />

                {/* --> REVIEWS LIST COMPONENT GOES HERE */}
                {this.state.currentProduct !== null ? <ReviewsList reviews={this.state.currentProduct.reviews}/> : null }

              </div>

              <div className="nav-container">
                --> PAGE NAV COMPONENT GOES HERE
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