import React from 'react';
import ReactDOM from 'react-dom';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './App';

it('renders without crashing', () => {
  const store = createMockStore()();

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
