import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './theme/GlobalStyle'
import Nav from './components/Nav/Nav'
import Base from './pages/base/Base';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path='/' >
            <Base />
          </Route>
          <Route path='/login' >
            <Base />
          </Route>
          <Route path='/register' >
            <Base />
          </Route>
          <Route path='/order' >
            <Base />
          </Route>
          <Route path='/admin' >
            <Base />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
