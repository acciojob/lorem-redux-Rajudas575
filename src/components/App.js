import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoremFetcher from './LoremFetcher';

const App = () => {
  return (
    <Provider store={store}>
      <LoremFetcher />
    </Provider>
  );
};

export default App;
