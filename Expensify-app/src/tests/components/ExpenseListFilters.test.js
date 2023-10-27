import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setStartDate, setEndDate, editTextFilter, sortByAmount, sortByDate, wrapper;
beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  editTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();

  wrapper = shallow(
  <ExpenseListFilters 
    filters= {filters}
    setStartDate= {setStartDate}
    setEndDate= {setEndDate}
    editTextFilter= {editTextFilter}
    sortByAmount= {sortByAmount}
    sortByDate= {sortByDate}
  />);
});

test('should Render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should Render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(editTextFilter).toHaveBeenLastCalledWith(value);
});

test('should Sort by date', () => {
  
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should Sort by amount', () => {
  
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  
  const value = {
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
  };

  wrapper.find('DateRangePicker').prop('onDatesChange')(value);
  expect(setStartDate).toHaveBeenLastCalledWith(value.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(value.endDate);
});

test('should handle date focus changes', () => {
  
  const calendarFocused = true;

  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});