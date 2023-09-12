import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";
import { addExpense } from './actions/expenses';
import { editTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()


// get visibleExpenses
// store.subscribe(() => {
//   const storeState = store.getState();
//   console.log(getVisibleExpenses(storeState.expenses, storeState.filters))
// })

// addExpense - water bill , gas bill
store.dispatch(addExpense({
  description: 'water bill',
  amount: 15000,
  createdAt: 10000
}))
store.dispatch(addExpense({
  description: 'gas bill',
  amount: 5000,
  createdAt: 1000
}))
store.dispatch(addExpense({
  description: 'rent',
  amount: 500000,
  createdAt: 100
}))


// set textFilter to water
store.dispatch(editTextFilter(''))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));