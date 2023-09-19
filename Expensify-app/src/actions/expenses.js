import uuid from "uuid";

// ADD_EXPENSE Action OBJ
export const addExpense = (
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

// EDIT_EXPENSE Action OBJ
export const editExpense = (
  {
    id,
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({

  type: "EDIT_EXPENSE",
  updates: {
    id,
    description,
    note,
    amount,
    createdAt
  }
});

// remove Expense Action OBJ
export const removeExpense = ({ id } = {}) => ({

  type: "REMOVE_EXPENSE",
  id
});