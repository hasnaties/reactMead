import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test("should Render NotFoundPage", () => {

  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});