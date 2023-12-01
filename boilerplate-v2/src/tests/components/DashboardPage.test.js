import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test("should Render Dashboard Page", () => {

  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});