import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './redux/store/store';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create redux store for App
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
      <Router>
        <App />
      </Router>
  </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);

