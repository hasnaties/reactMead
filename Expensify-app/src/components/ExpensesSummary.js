import React from 'react';
import { connect } from "react-redux";
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from "numeral";

export const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenseCount} expense{props.expenseCount > 1 ? 's' : undefined} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);