import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import jwtDecode from 'jwt-decode'
// Redux
import store from './redux/store';
import { Provider } from 'react-redux'
// Components
import GlobalStyle from './theme/GlobalStyle'
import Nav from './components/Nav/Nav'
import AuthRouter from './utils/AuthRoute';
// Pages
import Base from './pages/base/Base';
import Login from './pages/login/Login';
import Register from './pages//register/Register';


const token = localStorage.FBIdToken;
let authenticated;
if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp * 1000 < Date.now()) {
    //if (window.location.href !== '/login') window.location.href = '/login'
    authenticated = false;
  } else authenticated = true;
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Nav authenticated={authenticated}/>
        <Switch>
          <Route exact path='/' component={Base} />
          <AuthRouter exact path='/login' component={Login} authenticated={authenticated}/>
          <AuthRouter exact path='/register' component={Register} authenticated={authenticated}/>
          <AuthRouter exact path='/pane' component={Login} authenticated={authenticated}/>
          <AuthRouter exact path='/admin' component={Login} authenticated={authenticated}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
