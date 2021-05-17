import React from 'react';
import Tabs from '../client/src/Tabs.jsx';
import data from './testData.js';

import styles from '../client/src/styles/PageNav.module.css';
import {shallow, mount, render} from 'enzyme';

describe('Tabs component', () => {
  it('Should handle click for selecting \'Recommended\' order option', () => {
    const changeOrder = jest.fn();
    const wrapper = mount(<Tabs selectOrder={changeOrder} selected={'Recommended'} itemReviewsQuant={24} />);
    const instance = wrapper.instance();

    const menuOption = wrapper.find('.Recommended');

    menuOption.simulate('click');
    expect(changeOrder).toHaveBeenCalledWith('Recommended');
  })

  it('Should handle click for selecting \'Newest\' order option', () => {
    const changeOrder = jest.fn();
    const wrapper = mount(<Tabs selectOrder={changeOrder} selected={'Newest'} itemReviewsQuant={24} />);
    const menuOption = wrapper.find('.Newest');

    menuOption.simulate('click');
    expect(changeOrder).toHaveBeenCalledWith('Newest');
  })

  it('Should pass \'selected\' class to dropdown item corresponding to prop of the same name' , () => {
    const changeOrder = jest.fn();
    const wrapper = mount(<Tabs selectOrder={changeOrder} selected={'Newest'} itemReviewsQuant={24} />);
    expect(wrapper.find('.selected')).toEqual(wrapper.find('.Newest'));
  })


})