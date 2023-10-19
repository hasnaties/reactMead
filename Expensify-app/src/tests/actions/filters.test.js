import { 
  setEndDate, 
  setStartDate, 
  sortByAmount, 
  sortByDate, 
  editTextFilter 
} from "../../actions/filters";
import moment from 'moment';

// END DATE
test("Setup setEndDate action object", () => {
  
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

// START DATE
test("Setup setStartDate action object", () => {
  
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

// Sort Amount
test("Setup sortByAmount action object", () => {
  
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

// Sort Date
test("Setup sortByDate action object", () => {
  
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

// Edit Text (Args)
test("Setup editTextFilter action object", () => {
  
  const text = 'first';

  const action = editTextFilter(text);
  expect(action).toEqual({
    type: 'EDIT_TEXT_FILTER',
    text
  });
});

// Edit Text (no-Args)
test("Setup editTextFilter action object", () => {
  
  const action = editTextFilter();
  expect(action).toEqual({
    type: 'EDIT_TEXT_FILTER',
    text: ''
  });
});