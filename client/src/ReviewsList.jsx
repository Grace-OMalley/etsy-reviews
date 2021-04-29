import React from 'react';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
    // bindings go here
  }

// methods here

  render() {
    return (

      <div className="reviews-list">
        --> ReviewItem component goes here
        {this.props.reviews.map((review, i) => {
        <ReviewItem review={review} id={i} />
      })}
      </div>
    )
  }
}

export default ReviewsList;

