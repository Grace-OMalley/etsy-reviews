import React from 'react';
import ReviewItem from '../client/src/ReviewItem.jsx'
import data from './testData.js';

// import styles from '../client/src/styles/PageNav.module.css';
import {shallow, mount, render} from 'enzyme';

describe('Review Item component', () => {
  it('Should render solid stars according to user rating', () => {
    const wrapper = mount(<ReviewItem review={data.review} />);
    const solidStars = wrapper.find('.csolidStar');
    expect(solidStars).toHaveLength(data.review.starRating);
  })
})