import { createStore, combineReducers } from "redux";

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // Date or amount
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {

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

console.log(store.getState());