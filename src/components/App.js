import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoremFetcher from './components/LoremFetcher';

const App = () => {
  return (
    <Provider store={store}>
      <LoremFetcher />
    </Provider>
  );
};

export default App;
