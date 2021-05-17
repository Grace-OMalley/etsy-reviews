import React from 'react';
import Rating from '../client/src/Rating.jsx'

import data from './testData.js';

import styles from '../client/src/styles/PageNav.module.css';
import {shallow, mount, render} from 'enzyme';

describe('Rating component', () => {

  it('Should render solid stars according to rating', () => {
    const wrapper = shallow(<Rating rating={data.product.overallRating} product={data.product} />);
    const solidStars = wrapper.find('.solidStar');
    const hollowStars = wrapper.find('.hollowStar');
    expect(solidStars).toHaveLength(data.product.overallRating);
  })

  it('Should display correct reviews quantity', () => {
    const wrapper = shallow(<Rating rating={data.product.overallRating} product={data.product} />);
    const reviewsQuantityHeader = wrapper.find('.header').text();git 
    expect(reviewsQuantityHeader).toBe(`${data.product.itemReviewsQuant} reviews`);
  })
})