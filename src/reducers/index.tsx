// src/reducers/index.tsx
import { Reducer } from 'redux';

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState: StoreState = {
  languageName: 'TypeScript',
  enthusiasmLevel: 1
};

export const enthusiasm: Reducer<StoreState, EnthusiasmAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state;
};
