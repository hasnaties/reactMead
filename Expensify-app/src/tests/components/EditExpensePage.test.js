import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  )
});

test('should Render EditExpensePage correctly', () => {
  
  expect(wrapper).toMatchSnapshot();
});

test('should Handle editExpense', () => {
  
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should Handle removeExpense', () => {
  
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
  expect(history.push).toHaveBeenLastCalledWith("/");
});