import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/Sign_In';


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/singin' component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
