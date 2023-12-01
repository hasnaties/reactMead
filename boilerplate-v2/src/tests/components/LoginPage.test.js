import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

let startLogin = jest.fn();
let wrapper = shallow(<LoginPage startLogin={startLogin}/>);

test('should Render the LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
test('should Handle login button', () => {

  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});