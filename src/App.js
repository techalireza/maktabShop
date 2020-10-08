import React from 'react';
import logo from './logo.svg';
import Container from './Container';

import {Provider} from 'react-redux';
import store , {persistor}from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
}

export default App;
