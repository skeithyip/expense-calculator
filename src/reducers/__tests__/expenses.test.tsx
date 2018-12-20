import uuidv1 from 'uuid/v1';

import { expenses } from '../expenses';
import * as constants from '../../constants';
import { ExpenseAction } from '../../actions/expenseActions';

it('should return initial state', () => {
  // @ts-ignore
  const result = expenses(undefined, { type: '@@init' });
  expect(result).toEqual({ byId: {}, allIds: [] });
});

it('should handle ADD_EXPENSES', () => {
  const payload = {
    uuid: uuidv1(),
    name: 'name1',
    amount: 151.11,
    dateAdded: new Date()
  };
  // @ts-ignore
  const initialState = expenses(undefined, { type: '@@init' });
  const action: ExpenseAction = { type: constants.ADD_EXPENSE, payload };
  const result = expenses(initialState, action);

  expect(result).toEqual({
    byId: { [payload.uuid]: payload },
    allIds: [payload.uuid]
  });
});

it('should handle UPDATE_EXPENSE', () => {
  const payload = {
    uuid: uuidv1(),
    name: 'name1',
    amount: 151.11,
    dateAdded: new Date()
  };
  const newPayload = { ...payload, name: 'name2' };
  // @ts-ignore
  const initialState = expenses(undefined, { type: '@@init' });
  const action: ExpenseAction = { type: constants.ADD_EXPENSE, payload };
  const afterAdd = expenses(initialState, action);
  const updateAction: ExpenseAction = {
    type: constants.UPDATE_EXPENSE,
    payload: newPayload
  };
  const result = expenses(afterAdd, updateAction);

  expect(result).toEqual({
    byId: { [payload.uuid]: newPayload },
    allIds: [payload.uuid]
  });
});

it('should handle DELETE_EXPENSE', () => {
  const payload = {
    uuid: uuidv1(),
    name: 'name1',
    amount: 151.11,
    dateAdded: new Date()
  };
  // @ts-ignore
  const initialState = expenses(undefined, { type: '@@init' });
  const action: ExpenseAction = { type: constants.ADD_EXPENSE, payload };
  const afterAdd = expenses(initialState, action);
  const deleteAction: ExpenseAction = {
    type: constants.DELETE_EXPENSE,
    uuid: payload.uuid
  };
  const result = expenses(afterAdd, deleteAction);

  expect(result).toEqual({
    byId: {},
    allIds: []
  });
});
