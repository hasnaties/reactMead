import expensesTotal from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
  const total = expensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = expensesTotal([expenses[2]]);
  expect(total).toBe(4500);
});

test('should correctly add up multiple expenses', () => {
  const total = expensesTotal(expenses);
  expect(total).toBe(114195);
});