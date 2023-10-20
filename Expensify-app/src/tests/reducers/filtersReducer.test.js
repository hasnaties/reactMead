import filtersReducer from "../../reducers/filtersReducer";
import moment from "moment";

// Default:INIT
test("Setup default filter values", () => {
  
  const state = filtersReducer(undefined, { type: "@@INIT"});
  
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// sortBy:Amount
test("Setup sortBy: Amount", () => {
  
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT"});
  
  expect(state.sortBy).toBe('amount');
});

// sortBy:date
test("Setup sortBy: Date", () => {
  
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE"});
  
  expect(state.sortBy).toBe('date');
});

// Set Filter text
test("Set text Filter", () => {
  
  const state = filtersReducer(undefined, { type: "EDIT_TEXT_FILTER", text: "rent"});
  
  expect(state.text).toBe('rent');
});

// Set Filter startDate
test("Set text startDate", () => {
  
  const state = filtersReducer(undefined, { 
    type: "SET_START_DATE", 
    date: moment(0).valueOf()
  });
  
  expect(state.startDate).toBe(moment(0).valueOf());
});

// Set Filter endDate
test("Set text endDate", () => {
  
  const state = filtersReducer(undefined, { 
    type: "SET_END_DATE", 
    date: moment(0).valueOf()
  });
  
  expect(state.endDate).toBe(moment(0).valueOf());
});