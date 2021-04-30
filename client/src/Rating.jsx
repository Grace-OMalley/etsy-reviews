import React from 'react';
import styles from './styles/Rating.module.css';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    }
    // bindings go here
  }

// methods here

  render() {
    return (
      <div className={styles.ratingContainer}>
        {/* This is the Rating div! */}
        <div className={styles.ratingDisplay} css="margin-bottom-12px">
          <div className={styles.ratingDiv}>
            <h3>{this.props.product.itemReviewsQuant} reviews</h3>
            <span css={styles.starContainerSpan}>
              {/* <span>hidden inputs go here</span> */}
              {/* STARS */}
              <span className={styles.starSpan}><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
              <span className={styles.starSpan}><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
              <span className={styles.starSpan}><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
              <span className={styles.starSpan}><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
              <span className={styles.starSpan}><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
            </span>
          </div>
        </div>

        <div className={styles.statementOuter} css="margin-top-12px">
          <div className={styles.statementInner} css="margin-top-right-12px">
            <div className={styles.iconContainer}>
              <span className={styles.iconSpan} css="margin-right-12px">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
<path d="M12 3C9.61307 3 7.32388 3.94821 5.63606 5.63604C3.94823 7.32387 3.00002 9.61305 3.00002 12C2.99687 13.5776 3.41456 15.1276 4.21002 16.49L3.29002 19.92L4.08002 20.71L7.51002 19.79C8.87244 20.5855 10.4224 21.0031 12 21C14.387 21 16.6762 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6762 3.94821 14.387 3 12 3ZM15 15.93L14.63 16.2L12 14.65L9.41002 16.2L9.00002 15.93L9.72002 13L7.44002 11L7.59002 10.57L10.59 10.3L11.77 7.53H12.23L13.41 10.3L16.41 10.57L16.56 11L14.28 13L15 15.93Z" fill="#222222"></path>
</svg>
              </span>
            </div>
            <div className={styles.statementText}>
              <p className={styles.statementP1}>Statement caption goes here!</p>
              <p className={styles.statementP2}> Statement body goes here.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rating;