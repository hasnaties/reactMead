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