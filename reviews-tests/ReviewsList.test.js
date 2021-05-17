import React from 'react';
import ReviewsList from '../client/src/ReviewsList.jsx';
import ReviewItem from '../client/src/ReviewItem.jsx';
import data from './testData.js';

import styles from '../client/src/styles/PageNav.module.css';
import {shallow, mount, render} from 'enzyme';

describe('ReviewsList component', () => {
  it('Should only ever render one page (4 reviews) at a time', () => {
    const wrapper = mount(<ReviewsList currentPage={1} reviews={data.product.reviews} reviewsOrder={'Recommended'} />);
    const reviewItems = wrapper.find(ReviewItem);

    expect(reviewItems).toHaveLength(4);
  });

  it('Should render by date when passed \'Newest\' order', () => {
    let wrapper = mount(<ReviewsList currentPage={1} reviews={data.product.reviews} reviewsOrder={'Newest'} />);
    const reviewItems = wrapper.find(ReviewItem);
    let newestSortedReviews = data.product.reviews.slice(0, 4);

    newestSortedReviews.sort((a, b) => {
      let dateA = new Date(a.reviewDate);
      let dateB = new Date(b.reviewDate);
      return dateB - dateA;
    });

    const storage = [];

    reviewItems.forEach((item) => {
      let review = item.props().review;
      storage.push(review);
    });

    expect(storage).toEqual(newestSortedReviews);
  });

  it('Should render by star rating when passed \'Recommended\' order', () => {
    let wrapper = mount(<ReviewsList currentPage={1} reviews={data.product.reviews} reviewsOrder={'Recommended'} />);
    const reviewItems = wrapper.find(ReviewItem);

    let recommendedSortedReviews = data.product.reviews.slice(0, 4);

    recommendedSortedReviews.sort((a, b) => {
      return b.starRating - a.starRating;
    });

    const storage = [];

    reviewItems.forEach((item) => {
      let review = item.props().review;
      storage.push(review);
    });
    
    expect(storage).toEqual(recommendedSortedReviews);
  });
})