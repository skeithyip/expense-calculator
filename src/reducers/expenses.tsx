import { Reducer } from 'redux';
import produce from 'immer';

import { Payload, ExpenseAction } from '../actions/expenseActions';
import { GenericStoreState } from '../types/index';
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE
} from '../constants/index';

const initialState: GenericStoreState<Payload> = {
  byId: {},
  allIds: []
};

export const expenses: Reducer<GenericStoreState<Payload>, ExpenseAction> = (
  state = initialState,
  action
) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_EXPENSE: {
        const payload = action.payload;
        const uuid = payload.uuid;

        draft.byId[uuid] = payload;
        draft.allIds.push(uuid);
        break;
      }
      case UPDATE_EXPENSE: {
        const payload = action.payload;
        const uuid = payload.uuid;

        draft.byId[uuid] = payload;
        break;
      }
      case DELETE_EXPENSE: {
        const uuid = action.uuid;

        delete draft.byId[uuid];
        draft.allIds = draft.allIds.filter(e => e !== uuid);
        break;
      }
    }
  });
