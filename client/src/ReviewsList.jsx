import React from 'react';
import styles from './styles/ReviewsList.module.css';
import ReviewItem from './ReviewItem.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
  }

  render() {

    let reviews = this.props.reviews;

    if (this.props.reviewsOrder === 'Newest') {
      reviews.sort((a, b) => {
      let dateA = new Date(a.reviewDate);
      let dateB = new Date(b.reviewDate);
      return dateB - dateA;
    })
    } else if (this.props.reviewsOrder === 'Recommended') {
      reviews.sort((a, b) => {
        return b.starRating - a.starRating;
      });
    }

    //pagination logic below

    //page 1
    // (0, 4)

    // page 2
    // (5, 9)

    //page 3
    // (10, 14)

    //page 4
    // (15, 19)

    //page 5
    // (20, 24)

    /// etc...

    const first = (this.props.currentPage - 1) * 4;
    const last = first + 4;
    const page = reviews.slice(first, last);

    return (
      <div className={styles.reviewsContainer}>
        <div className={styles.gridBlock}>
            {page.map((review, i) => {
            return <ReviewItem review={review} key={i} dataKey={i + 1} clamp={true} />
          })}
        </div>
      </div>
    )

  }
}

export default ReviewsList;

