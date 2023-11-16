import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout = jest.fn();
const wrapper = shallow(<Header startLogout={startLogout}/>);

test("should Render Header correctly", () => {
  
  expect(wrapper).toMatchSnapshot();
});

test("should handle logout button", () => {
  
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});