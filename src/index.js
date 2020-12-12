import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './constants/Theme';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { DictionaryReducer } from './data/reducers/Dictionary';
import thunk from 'redux-thunk';
import './index.css';

const reducers = combineReducers({
  dictionary: DictionaryReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);
