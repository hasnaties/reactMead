import React from 'react';
import { connect } from 'react-redux';
import { editTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type='text' 
    value={props.filters.text} 
    onChange={(e) => {
      return (props.dispatch(editTextFilter(e.target.value)));
    }}>
    </input>
    <select 
    value={props.filters.sortBy} 
    onChange={(e) => {
      if(e.target.value === "date") {
        return (props.dispatch(sortByDate()))
      }
      return (props.dispatch(sortByAmount()));
    }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (props) => {
  return {
    filters: props.filters
  }
}
export default connect(mapStateToProps)(ExpenseListFilters)