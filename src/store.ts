import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { Payload, ExpenseAction } from './actions/expenseActions';
import { GenericStoreState } from './types/index';
import { expenses } from './reducers/expenses';

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore<GenericStoreState<Payload>, ExpenseAction, {}, {}>(
  expenses,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('./reducers', () => {
    store.replaceReducer(expenses);
  });
}

export default store;
