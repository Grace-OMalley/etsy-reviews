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

  it('Should render page and arrow buttons when passed a page count greater than 1', () => {
    const pagesCount = 5;
    const wrapper = mount(<PageNav pagesCount={pagesCount} currentPage={1} />);

    wrapper.setState({
      pagesCount: pagesCount
    })

    const items = wrapper.find('.listItem');
    const leftArrow = wrapper.find('svg .left');
    const rightArrow = wrapper.find('svg .right');

    expect(items).toHaveLength(pagesCount);
    expect(leftArrow).toHaveLength(1);
    expect(rightArrow).toHaveLength(1);
    expect(wrapper.state().pagesCount).toBe(pagesCount);
  })

  // Should not render arrows when passed one page or fewer'
  it('Should not render arrows when passed one page or fewer', () => {
    const wrapper = mount(<PageNav pagesCount={1} currentPage={1} />);

    const leftArrow = wrapper.find('svg .left');
    const rightArrow = wrapper.find('svg .right');

    expect(leftArrow).toHaveLength(0);
    expect(rightArrow).toHaveLength(0);
  })

  // Clicking arrow buttons should cycle pages
  it('Left-Right buttons should call changePage handler', () => {
    const pagesCount = 5;
    const handleClick = jest.fn()
    const wrapper = mount(<PageNav pagesCount={pagesCount} currentPage={1} changePage={handleClick} />);

    const leftArrow = wrapper.find('svg .left');
    const rightArrow = wrapper.find('svg .right');

    expect(wrapper.props().currentPage).toBe(1);
    // simulate click here
    rightArrow.simulate('click');
    expect(handleClick).toHaveBeenCalled();
    leftArrow.simulate('click');
    expect(handleClick).toHaveBeenCalled();


  })
})