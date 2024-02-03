// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './MovieReducer';  // Import your root reducer
import rootReducer2 from "./SongReducer"

import App from './App';

const store = configureStore({
  reducer:
  {
    movie:rootReducer,
    song:rootReducer2
  }
});  // Create your Redux store with the rootReducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

