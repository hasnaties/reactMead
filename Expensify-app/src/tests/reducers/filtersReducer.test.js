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
  
  const text = 'rent';
  const state = filtersReducer(undefined, { type: "EDIT_TEXT_FILTER", text});
  
  expect(state.text).toBe(text);
});

// Set Filter startDate
test("Set text startDate", () => {
  
  const startDate = moment();
  const state = filtersReducer(undefined, { 
    type: "SET_START_DATE", 
    startDate
  });
  
  expect(state.startDate).toEqual(startDate);
});

// Set Filter endDate
test("Set text endDate", () => {
  
  const endDate = moment();
  const state = filtersReducer(undefined, { 
    type: "SET_END_DATE", 
    endDate
  });
  
  expect(state.endDate).toEqual(endDate);
});