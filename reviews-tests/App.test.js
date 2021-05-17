import React from 'react';
import App from '../client/src/index.jsx'
import ReviewItem from '../client/src/ReviewItem.jsx';
import ReviewsList from '../client/src/ReviewsList.jsx';
import Rating from '../client/src/Rating.jsx';
import Tabs from '../client/src/Tabs.jsx';
import PageNav from '../client/src/PageNav.jsx';

import data from './testData.js';
import styles from '../client/src/styles/index.module.css';
import {shallow, mount, render} from 'enzyme';

describe('App', () => {

  it('Should only render child components when product data exists on state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.containsMatchingElement(<ReviewsList />)).toBe(false);
    expect(wrapper.containsMatchingElement(<PageNav />)).toBe(false);
    expect(wrapper.containsMatchingElement(<Rating />)).toBe(false);
    expect(wrapper.containsMatchingElement(<Tabs />)).toBe(false);

    wrapper.setState({
      currentProduct: data.product
    });

    expect(wrapper.containsMatchingElement(<ReviewsList />)).toBe(true);
    expect(wrapper.containsMatchingElement(<PageNav/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Rating />)).toBe(true);
    expect(wrapper.containsMatchingElement(<Tabs />)).toBe(true);
  })
})

