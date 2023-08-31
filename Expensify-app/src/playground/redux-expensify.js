


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