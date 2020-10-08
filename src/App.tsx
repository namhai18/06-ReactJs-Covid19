import React from 'react';
import logo from './logo.svg';
import './App.css';
import Covid19View from './views/Covid19View/Covid19View';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path='/'>
            <Login />
          </Route>
          <Route exact={false} path='/covid19View'>
            <Covid19View>
            </Covid19View>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
