import React from 'react';
import { connect } from 'react-redux';
import { editTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused })
  }

  onTextChange = (e) => {
    return (this.props.editTextFilter(e.target.value));
  }

  onSortByChange = (e) => {
    if (e.target.value === "date") {
      return (this.props.sortByDate());
    }
    return (this.props.sortByAmount());
  }

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input 
              type='text'
              placeholder='Search expenses'
              className='text-input'
              value={this.props.filters.text}
              onChange={this.onTextChange}>
            </input>
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortBy}
              onChange={this.onSortByChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  editTextFilter: (value) => dispatch(editTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

const mapStateToProps = (props) => ({
  filters: props.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)