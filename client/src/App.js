import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Store from './pages/store';


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/store" component={Store} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
