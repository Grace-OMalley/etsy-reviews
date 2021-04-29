import React from 'react';

const ReviewItem = (props) => {
  return (
    <div className="review-item">

      <div className="user-date">
        <div className="user-profile-img-container">
          User img
        </div>
        </div>

        <div className="username-date=container">
          <p><a>username</a>post date</p>
        </div>

        <div className="body-text-container" css="padding-left-48px">

          <div className="inner-body-container" css="margin-bottom-6px">

            <div className="body-text" css="margin-right-48px">

              <div className="stars-container" css="margin-left-6px">
                <span>stars go here</span>
              </div>
              <div className="specs-container" css="margin-bottom-12px">
                unordered list with specs here
              </div>

              <div className="text-body-container" css="margin-bottom-12px">
                <div className="text-body">
                  <p>Review body goes here</p>
                  <button>...</button>
              </div>

              <div className="user-img-container">
                user-uploaded image goes here as button
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )

}

export default ReviewItem;