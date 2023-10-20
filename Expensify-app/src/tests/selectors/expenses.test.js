import selectExpenses from "../../selectors/expenses";
import moment from 'moment';
import expenses from '../fixtures/expenses';

// Filter:Text
test("Filter by text value", () => {

  const filters = {
    text: 'rent',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

// Filter:startDate
test("Filter by start date", () => {

  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0), 
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

// Filter:endDate
test("Filter by end date", () => {

  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate: moment(0)
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

// sort:Date
test("Sort by date", () => {

  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// sort:amount
test("Sort by date", () => {

  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});