import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerStore from './reducer';
import { Provider } from 'react-redux';
registerServiceWorker();


let store = createStore(
  reducerStore, applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

