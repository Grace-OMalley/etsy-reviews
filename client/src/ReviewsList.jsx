import React from 'react';
import styles from './styles/ReviewsList.module.css';
import ReviewItem from './ReviewItem.jsx';

const ReviewsList = (props) => {
  let reviews = props.reviews;

  if (props.reviewsOrder === 'Newest') {
    reviews.sort((a, b) => {
    let dateA = new Date(a.reviewDate);
    let dateB = new Date(b.reviewDate);
    return dateB - dateA;
  })
  } else if (props.reviewsOrder === 'Recommended') {
    reviews.sort((a, b) => {
      return b.starRating - a.starRating;
    });
  }

  //pagination logic

  const first = (props.currentPage - 1) * 4;
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

export default ReviewsList;

