import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './theme/GlobalStyle'
import Nav from './components/Nav/Nav'
import Base from './pages/base/Base';
import Login from './pages/login/Login';
import Register from './pages//register/Register';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Base} />
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/order' component={Login}/>
          <Route path='/admin' component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
