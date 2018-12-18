import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { EnthusiasmAction } from './actions/index';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore<StoreState, EnthusiasmAction, {}, {}>(
  enthusiasm,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('./reducers', () => {
    store.replaceReducer(enthusiasm);
  });
}

export default store;
