import React from 'react';
import logo from './logo.svg';
import Container from './Container';

import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
