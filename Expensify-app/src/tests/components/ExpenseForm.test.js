import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm (with no date)', () => {
  
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm (with date)', () => {
  
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should Render error message for invalid form submission', () => {
  
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should Set description on input change', () => {
  
  const value = 'New description';

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('description')).toBe(value);
});

test('should Set Note on input change', () => {
  
  const value = 'New note';

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').at(0).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('note')).toBe(value);
});

test('should Set amount state (valid data)', () => {
  
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('amount')).toBe(value)
});

test('should Not set amount state (invalid data)', () => {
  
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });

  expect(wrapper.state('amount')).toBe('')
});