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

    if (this.props.reviewsOrder === 'Newest') {
      console.log('NEWEST')
      reviews.sort((a, b) => {
      let dateA = new Date(a.reviewDate);
      let dateB = new Date(b.reviewDate);
      return dateB - dateA;
    })
      // console.log('sorted reviews:', reviews);
      // reviews = reviews.slice(0, 4);
    } else if (this.props.reviewsOrder === 'Recommended') {
      console.log('RECOMMENDED')
      reviews.sort((a, b) => {
        return b.starRating - a.starRating;
      });
      // console.log('sorted reviews:', reviews);
      // reviews = reviews.slice(0, 4);
    }

    //pagination logic here

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

    const first = (this.props.currentPage - 1) * 4;
    const last = first + 4;
    const page = reviews.slice(first, last);
    // console.log(first, last);
    // console.log('current page:', page);

    return (
      <div className={styles.reviewsContainer}>
        <div className={styles.gridBlock}>
            {/* --> ReviewItem component goes here */}
            {page.map((review, i) => {
            return <ReviewItem review={review} key={i} dataKey={i + 1} />
          })}
        </div>
      </div>
    )

  }
}

export default ReviewsList;

