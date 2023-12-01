import React from 'react';
import { shallow } from "enzyme";
import LoadingPage from '../../components/LoadingPage';

test('should Render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage />)
  expect(wrapper).toMatchSnapshot();
});