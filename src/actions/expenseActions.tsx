import * as constants from '../constants';

export type Payload = {
  uuid: string;
  name: string;
  amount: number;
  dateAdded: Date;
  reference?: string;
  color?: string;
};

interface AddExpense {
  type: constants.ADD_EXPENSE;
  payload: Payload;
}

interface UpdateExpense {
  type: constants.UPDATE_EXPENSE;
  payload: Payload;
}

interface DeleteExpense {
  type: constants.DELETE_EXPENSE;
  uuid: string;
}

export type ExpenseAction = AddExpense | UpdateExpense | DeleteExpense;

export function addExpense(payload: Payload): AddExpense {
  return {
    type: constants.ADD_EXPENSE,
    payload
  };
}

export function updateExpense(payload: Payload): UpdateExpense {
  return {
    type: constants.UPDATE_EXPENSE,
    payload
  };
}

export function deleteExpense(uuid: string): DeleteExpense {
  return {
    type: constants.DELETE_EXPENSE,
    uuid
  };
}
