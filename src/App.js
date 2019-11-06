import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import Login from './components/auth/Login';
 
import './App.css';

function onAuthRequired({history}) {
  history.push('/login');
}

function App() {
  return (
    <Router>
      <Security issuer='https://dev-148803.okta.com/oauth2/default'  
        clientId='0oa1r97wx2yweLGLi357'
        redirectUri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}>
        
    <div className="App">
       <Navbar />
       <div className="container">
      <Route path="/" exact={true} component={Home} />
      <SecureRoute path="/Users" exact={true} component={Users} />
            <Route path='/login' render={() => <Login 
            baseUrl='https://dev-148803.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
    </div>
    </div>
    </Security>
    </Router>
  );
}

export default App; 
