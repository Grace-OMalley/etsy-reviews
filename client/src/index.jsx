import React from 'react'
import ReactDOM from 'react-dom'
import ReviewsList from './ReviewsList.jsx';
import ReviewItem from './ReviewItem.jsx';
import PageNav from './PageNav.jsx';
import Tabs from './Tabs.jsx';
import Rating from './Rating.jsx';
import $ from 'jquery';
import "./styles.css";

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
        console.log('successfully retreved:', product);
        this.setState({
          currentProduct: product
        })
      }
    })

  }

  render() {
    return (
      <div className="outer-reviews-col">
        Outermost col (margin right)
        <div className="inner-reviews-col" css="padding-left-30px">
          inner reviews col
          <div className="reviews-panel">
            --> RATING COMPONENT GOES HERE
            ...includes overall rating and statement
          </div>
          <div className="data-reviews">
            data reviews panel--loader will overlay this div
            <div>
              --> TABS COMPONENT GOES HERE
              ... includes reviews for this item tab and reviews for this shop tab + sort feature
            </div>
          </div>
          <div className="reviews-list-container">
            --> REVIEWS LIST COMPONENT GOES HERE
          </div>
          <div className="nav-container">
            --> PAGE NAV COMPONENT GOES HERE
          </div>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));