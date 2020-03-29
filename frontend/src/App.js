import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './theme/GlobalStyle'
import Nav from './components/Nav/Nav'
import Base from './pages/base/Base';
import Login from './pages/login/Login';
import Register from './pages//register/Register';
import jwtDecode from 'jwt-decode'
import AuthRouter from './utils/AuthRoute';

const token = localStorage.FBIdToken;
let authenticated;
if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false;
  } else authenticated = true;
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav authenticated/>
        <Switch>
          <Route exact path='/' component={Base} />
          <AuthRouter path='/login' component={Login} authenticated={authenticated}/>
          <AuthRouter path='/register' component={Register} authenticated={authenticated}/>
          <AuthRouter path='/pane' component={Login} authenticated={authenticated}/>
          <AuthRouter path='/admin' component={Login} authenticated={authenticated}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
