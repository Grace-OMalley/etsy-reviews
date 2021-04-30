import React from 'react';

const ReviewItem = (props) => {
  return (
    <div className="review-item">

      <div className="user-date">
        <div className="user-profile-img-container">
          <img src={props.review.userPic} />
        </div>
        </div>

        <div className="username-date=container">
          <p><a>{props.review.username}</a>{props.review.reviewDate}</p>
        </div>

        <div className="body-text-container" css="padding-left-48px">
          <div className="inner-body-container" css="margin-bottom-6px">
            <div className="body-text" css="margin-right-48px">
              <div className="stars-container" css="margin-left-6px">
                <span>stars rating: {props.review.starRating}</span>
              </div>
              <div className="specs-container" css="margin-bottom-12px">
                unordered list with specs here
              </div>
              <div className="text-body-container" css="margin-bottom-12px">
                <div className="text-body">
                  <p>{props.review.reviewBody}</p>
                  <button>...</button>
              </div>
              <div className="user-img-container">
                user-uploaded image goes here as button
                <button>
                  <img src={props.review.userProductImage} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ReviewItem;