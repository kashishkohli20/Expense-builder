import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { expensesReducer } from './reducers/expenses'
import { filtersReducer } from './reducers/filters'

const store = createStore(combineReducers({
  expensesReducer,
  filtersReducer
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));