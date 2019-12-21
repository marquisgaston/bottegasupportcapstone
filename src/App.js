import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";

import Demo from './demo';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

function App() {
  return (
    <div className="App">
      <Provider store={createStoreWithMiddleware(reducers)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Demo/>
      </header>
      </Provider>
    </div>
  );
}

export default App;
