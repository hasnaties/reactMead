import database from "../firebase/firebase";

// ADD_EXPENSE Action OBJ
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {description, note, amount, createdAt}
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    }).catch((err) => {
      console.log(err);
    });
  };
};

// EDIT_EXPENSE Action OBJ
export const editExpense = (id, updates) => ({

  type: "EDIT_EXPENSE",
  id,
  updates
});

// remove Expense Action OBJ
export const removeExpense = ({ id } = {}) => ({

  type: "REMOVE_EXPENSE",
  id
});

// set Expenses Action OBJ
export const setExpenses = (expenses) => ({

  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {

  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
        .then((snapshot) => {
          const expensesData = [];

          snapshot.forEach((childSnap) => {
            expensesData.push({
              id: childSnap.key,
              ...childSnap.val()
            });
          });

          dispatch(setExpenses(expensesData));
        });
  };
};