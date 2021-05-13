import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/index.jsx'
import ReviewItem from '../client/src/ReviewItem.jsx';
import ReviewsList from '../client/src/ReviewsList.jsx';
import Tabs from '../client/src/Tabs.jsx';
import PageNav from '../client/src/PageNav.jsx';

import styles from '../client/src/styles/PageNav.module.css';
import {shallow, mount, render} from 'enzyme';

describe('Page Nav component', () => {

  it('Should render page and arrow buttons when passed a page count', () => {
    const pagesCount = 5;

    const wrapper = render(<PageNav pagesCount={pagesCount} currentPage={1} />);


    // console.log('IMPORTANT:', wrapper.debug());

    // wrapper.setState({
    //   pagesCount: pagesCount,
    //   currentPage: 1
    // })

    const items = wrapper.find('.listItem');
    const leftArrow = wrapper.find('svg .left');
    const rightArrow = wrapper.find('svg .right');

    // assertions
    // expect(wrapper).contains('.listItem');
    expect(items).toHaveLength(pagesCount);
    expect(leftArrow).toHaveLength(1);
    expect(rightArrow).toHaveLength(1);
  })

  it('')
})