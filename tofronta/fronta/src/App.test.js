// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Make sure to import your store
import App from './App';

test('renders app header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Change the text being searched for
  const headerElement = screen.getByText(/mon computer avec redux/i);
  expect(headerElement).toBeInTheDocument();
});
