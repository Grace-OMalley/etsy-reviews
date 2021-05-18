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

    wrapper.setProps({
      selected: 'Recommended'
    })
    wrapper.update();
    expect(wrapper.find('.selected')).toEqual(wrapper.find('.Recommended'));
  })

  it('Should call setState and toggle menu when dropdown is clicked', () => {
    const wrapper = mount(<Tabs selected={'Newest'} itemReviewsQuant={24} />);
    const menuOn = wrapper.find('.menuOn');
    const menuOff = wrapper.find('.menuOff');
    const menuButton = wrapper.find('.menuButton');

    const instance = wrapper.instance();
    const stateSet = jest.spyOn(instance, 'setState');

    expect(menuOn).toHaveLength(0);
    expect(menuOff).toHaveLength(1);
    expect(wrapper.state().showMenu).toBe(false);

    menuButton.simulate('click');
    expect(stateSet).toHaveBeenCalled();
    expect(wrapper.state().showMenu).toBe(true);
  })
})