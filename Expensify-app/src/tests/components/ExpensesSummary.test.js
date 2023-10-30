import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from "../fixtures/expenses";

test('should Render correctly with single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9434}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should Render correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9434}/>);
  expect(wrapper).toMatchSnapshot();
});