import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
  
  <div>
    {props.expenses.length === 0 ? (
      <p>Expenses list is empty.</p>
    ) : (
      <div>
        <h4>Expenses List</h4>
        {
          props.expenses.map((expense) => {
          return (
            <ExpenseListItem key={expense.id} {...expense}/>
          );
          })
        }
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)