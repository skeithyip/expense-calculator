import uuidv1 from 'uuid/v1';

import { addExpense, updateExpense, deleteExpense } from '../expenseActions';
import * as constants from '../../constants';

it('should dispatch ADD_EXPENSE', () => {
  const payload = {
    uuid: uuidv1(),
    name: 'name1',
    amount: 151.11,
    dateAdded: new Date()
  };

  const result = addExpense(payload);
  expect(result).toEqual({
    type: constants.ADD_EXPENSE,
    payload
  });
});

it('should dispatch UPDATE_EXPENSE', () => {
  const payload = {
    uuid: uuidv1(),
    name: 'name1',
    amount: 151.11,
    dateAdded: new Date()
  };

  const result = updateExpense(payload);
  expect(result).toEqual({
    type: constants.UPDATE_EXPENSE,
    payload
  });
});

it('should dispatch DELETE_EXPENSE', () => {
  const uuid = uuidv1();
  const result = deleteExpense(uuid);
  expect(result).toEqual({
    type: constants.DELETE_EXPENSE,
    uuid
  });
});
