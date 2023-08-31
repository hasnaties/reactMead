// Set Text
export const editTextFilter = (text = '') => ({
  type: 'EDIT_TEXT_FILTER',
  text
});

// Set Starting Date
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// Set Ending Date
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});

// SET SORT BY AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET SORT BY DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});