import React from 'react';
import styles from './styles/ReviewsList.module.css';
import ReviewItem from './ReviewItem.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      reviewsOrder: 'recommended'
    }
    // bindings go here
  }

// methods here

  render() {
    let reviews;
    if (this.state.reviewsOrder === 'recommended') {
      reviews = this.state.reviews;
    }
    return (
      <div className={styles.reviewsContainer}>
        <div className={styles.gridBlock}>
            {/* --> ReviewItem component goes here */}
            {reviews.map((review, i) => {
            return <ReviewItem review={review} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export default ReviewsList;

