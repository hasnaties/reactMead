import expensesReducer from '../../reducers/expensesReducer';
import expenses from "../fixtures/expenses";

// default:INIT
test('should Set default state', () => {
  
  const result = expensesReducer(undefined, { type: '@@INIT'})
  expect(result).toEqual([]);
});

// Remove By ID
test('should remove expense by ID', () => {
  
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[2]])
});

// Not Remove if 404
test('should not remove expense if not found', () => {
  
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
});

// Add expense
test('should Add expense', () => {
  
  const expense = {
    id: '4',
    description: 'THis is the bill.'
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const result = expensesReducer(expenses, action);

  expect(result).toEqual([...expenses, expense]);
});

// EDIT EXPENSE
test('should Edit expense', () => {
  
  const updates = {
    description: 'This is the bill.'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates
  };
  const result = expensesReducer(expenses, action);

  expect(result[2].description).toBe(updates.description);
});

// Not edit if 404
test('should not Edit expense if not found', () => {
  
  const action = {
    type: 'EDIT_EXPENSE',
    updates: {
      id: '-1',
      description: 'This is the bill.'
    }
  };
  const result = expensesReducer(expenses, action);

  expect(result).toEqual(expenses);
});
