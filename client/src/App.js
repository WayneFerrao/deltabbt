import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthRoute from './util/authRoute';
import jwtDecode from 'jwt-decode';
//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Store from './pages/store';
import Profile from './pages/profile';

const token = localStorage.FBIdToken;
let authenticated; 
if (token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp *1000 < Date.now()){
    window.location.href= '/login';
    authenticated = false;
  }else {
    authenticated = true;
  }
}

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} authenticated={authenticated} />
          <AuthRoute exact path="/signup" component={Signup} authenticated={authenticated} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
