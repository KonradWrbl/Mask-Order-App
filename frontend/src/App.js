import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './theme/GlobalStyle'
import Nav from './components/Nav/Nav'
import Base from './pages/base/Base';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path='/' component={Base} />
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Login}/>
          <Route path='/order' component={Login}/>
          <Route path='/admin' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
