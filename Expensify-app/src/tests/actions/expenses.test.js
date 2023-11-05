import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// Remove
test("Setup remove expense action objet", () => {
  
  const action = removeExpense({ id: 'ABC123'});
  expect(action).toEqual({
    id: "ABC123",
    type: "REMOVE_EXPENSE"
  })
})

// Edit
test("Setup edit expense action object", () => {

  const testData = {
    description: 'something',
    amount: 10,
    createdAt: 230
  }
  
  const action = editExpense("ABC345", testData)

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: "ABC345",
    updates: {
      ...testData
    }
  })
})

// ADD (args)
test("Setup add expense action object", () => {

  const action = addExpense(expenses[1]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  })
})

// startAddExpense Action
test("should Add data in store and database", (done) => {

  const store = createMockStore({});

  const expenseData = {
    description: 'ma man',
    note: 'nah',
    amount: 5001,
    createdAt: 12230000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    
    // For store
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    // For Database
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

// startAddExpense Action
test("should Add data in store and database with default values", (done) => {

  const store = createMockStore({});

  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    
    // For store
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    // For Database
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});