import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


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
  
  const testData = {
    description: 'something',
    note: "",
    amount: 10,
    createdAt: 230
  }

  const action = addExpense(testData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...testData,
      id: expect.any(String)
    }
  })
})

// ADD (no-args)
test("Setup add expense action object", () => {

  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
})