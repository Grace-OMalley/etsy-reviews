import React from 'react';
import styles from './styles/ReviewItem.module.css';

const ReviewItem = (props) => {
  return (
    <div className={styles.reviewItem}>

      <div className={styles.userDate} css="user-date">
        <div className={styles.profileContainer} css="user-profile-img-container">
          <img src={props.review.userPic} className={styles.profilePic} css="profile-pic"/>
        </div>
        <div className={styles.usernameDate}css="username-date-container">
          <p><a>{props.review.username}</a>{props.review.reviewDate.slice(4, -42)}</p>
        </div>
      </div>

        <div className={styles.bodyContainer} css="body-text-container">
          <div className={styles.innerBodyContainer} css="inner-body-container">
            <div className={styles.innermostContainer}>
            <div className={styles.innerContainer} css="body-text" css="margin-right-48px">
              <div className={styles.starsContainer} css="margin-left-6px">
                <span className={styles.starsSpan} css="stars-span">
                  {/* {props.review.starRating} */}
                    <span class="etsy-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                    <span class="etsy-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                    <span class="etsy-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                    <span class="etsy-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                    <span class="etsy-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>

                  </span>
                </div>
              </div>

              <div className={styles.specsContainer} css="specs-container">
                <div className={styles.innerSpecsContainer} css="inner-specs-container">
                  <ul>
                    <li>
                      <p className={styles.specType}>SPEC TYPE: </p>
                      <p className={styles.specBody}> SPECIFICATION_BODY</p>

                    </li>
                    <li>
                      <p className={styles.specType}>SPEC TYPE: </p>
                      <p className={styles.specBody}> SPECIFICATION_BODY</p>

                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.textBodyContainer} css="text-body-container">
                <div className={styles.textBody} css="text-body">
                  <div className={styles.text}>
                    <p>{props.review.reviewBody}</p>
                  </div>
                  <button></button>
                </div>
              </div>




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
  )

}

export default ReviewItem;