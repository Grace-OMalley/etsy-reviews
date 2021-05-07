import React from 'react';
import styles from './styles/ReviewsList.module.css';
import ReviewItem from './ReviewItem.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
    // bindings go here
  }

  render() {

    console.log('prop:', this.props.reviewsOrder);

    let reviews = this.state.reviews;

    if (this.props.reviewsOrder === 'newest') {
      console.log('NEWEST')
      reviews.sort((a, b) => {
      let dateA = new Date(a.reviewDate);
      let dateB = new Date(b.reviewDate);
      return dateA - dateB;
    })
      reviews = reviews.reverse().slice(0, 5);
      console.log('sorted reviews:', reviews);

    } else if (this.props.reviewsOrder === 'recommended') {
      console.log('RECOMMENDED')
      reviews.sort((a, b) => {
        return b.starRating - a.starRating;
      });
      reviews = reviews.slice(0, 5);
      console.log('sorted reviews:', reviews);
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

