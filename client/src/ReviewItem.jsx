import React from 'react';
import styles from './styles/ReviewItem.module.css';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clampText: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.review._id !== this.props.review._id) {
      this.setState({
        clampText: true
      })
    }
  }

  handleClick() {
    this.setState({
      clampText: !this.state.clampText
    })
  }

  render() {
    const renderStars = () => {
      let rating = this.props.review.starRating;
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<span key={i} className={'solidStar'} data-rating="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>);
        } else {
          stars.push(<span key={i} className={'hollowStar'} data-rating="4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z"></path></svg></span>);
        }
      }
      return stars;
    }

    return (
      <div className={styles.reviewItem}>

        <div className={styles.userDate} css="user-date">
          <div className={styles.profileContainer} css="user-profile-img-container">
            <img src={this.props.review.userPic} className={styles.profilePic} css="profile-pic"/>
          </div>
          <div className={styles.usernameDate}css="username-date-container">
            <p><a className={styles.anchor}>{this.props.review.username}</a>{this.props.review.reviewDate.slice(4, -42)}</p>
          </div>
        </div>

          <div className={styles.bodyContainer} css="body-text-container">
            <div className={styles.innerBodyContainer} css="inner-body-container">
              <div className={styles.innermostContainer}>
              <div className={styles.innerContainer} css="body-text" css="margin-right-48px">
                <div className={styles.starsContainer} css="margin-left-6px">
                  <span className={styles.starsSpan} css="stars-span">
                    {renderStars()}
                    </span>
                  </div>
                </div>

                <div className={styles.specsContainer} css="specs-container">
                  <div className={styles.innerSpecsContainer} css="inner-specs-container">
                    <ul>
                      {this.props.review.productSpecs.map((spec, i) => (
                        <li className={styles.listItem}>
                        <p className={styles.specType}>Shirt Size: </p>
                        <p className={styles.specBody}>{spec.Size}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.textBodyContainer} css="text-body-container">
                  <div className={styles.textBody} css="text-body">
                    <div className={styles.text}>
                      <p className ={this.state.clampText === true ? styles.clamped : ''}>{this.props.review.reviewBody}</p>
                    </div>
                    <button className={`${styles.textButton} ${this.state.clampText === false ? styles.hidden : ''}`} onClick = {this.handleClick}></button>
                  </div>
                </div>
              </div>

              {/* <div className="user-img-container">
                <button>
                  <img src={this.props.review.userProductImage} />
                </button>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewItem;