import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense, 
  removeExpense, 
  editExpense, 
  startAddExpense, 
  setExpenses, 
  startSetExpenses, 
  startRemoveExpense 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = [];
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt}
  });

  database.ref('expenses').set(expensesData).then(() => done());
});


// Edit
test("Setup edit expense action object", () => {
  
  const testData = {
    description: 'something',
    amount: 10,
    createdAt: 230
  };
  
  const action = editExpense("ABC345", testData);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: "ABC345",
    updates: {
      ...testData
    }
  });
});

// ADD (args)
test("Setup add expense action object", () => {

  const action = addExpense(expenses[1]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

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

test('should Setup SetExpenses action object', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test('should fetch data from the database', (done) => {

  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    
    expect(store.getActions()[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});
// Remove
test("Setup remove expense action objet", () => {
  
  const action = removeExpense({ id: 'ABC123'});
  expect(action).toEqual({
    id: "ABC123",
    type: "REMOVE_EXPENSE"
  });
});

test("should Remove the expense from the Database", (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    });

    return database.ref(`expenses/${id}`).once('value');

  }).then((snap) => {
    expect(snap.val()).toBeFalsy();
    done();
  });
});