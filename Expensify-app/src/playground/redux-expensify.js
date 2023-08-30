import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {

    case "ADD_EXPENSE":
      return [
        ...state,
        action.expense
      ];

    case "REMOVE_EXPENSE":
      return (state.filter(({id}) => id !== action.id));
      
    default:
      return state;
  }
};

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({

  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({

  type: "REMOVE_EXPENSE",
  id
});

// ----------------------------------------

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // Date or amount
  startDate: undefined,
  endDate: undefined
}
const editTextFilter = (text = '') => ({
  type: 'EDIT_TEXT_FILTER',
  text
});
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_TEXT_FILTER': 
    return {
      ...state,
      text: action.text
    }
    case 'SET_START_DATE': 
    return {
      ...state,
      startDate: action.date
    }
    case 'SET_END_DATE': 
    return {
      ...state,
      endDate: action.date
    }
    case 'SORT_BY_AMOUNT': 
    return {
      ...state,
      sortBy: 'amount'
    }
    case 'SORT_BY_DATE': 
    return {
      ...state,
      sortBy: 'date'
    }

    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return (expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
    const endDateMatch = typeof endDateDate !== 'number' || expense.createdAt <= endDate; 
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  })).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}


store.subscribe(() => {
  const storeState = store.getState();
  console.log(getVisibleExpenses(storeState.expenses, storeState.filters))
})

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))


const expenseOne = store.dispatch(addExpense({
  description: 'test0',
  note: "test0",
  amount: 100,
  createdAt: 200
}))

store.dispatch(addExpense({
  description: 'test1',
  note: "test1",
  amount: 200,
  createdAt: 300
}))

store.dispatch(sortByAmount())