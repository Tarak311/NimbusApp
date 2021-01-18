import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "./subcomponents/login.components"; 
import SignUp from "./subcomponents/signup.components";

function Login() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>LittleOBI</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Register"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/login' component={Signin}/>
            <Route path="/login" component={Signin} />
            <Route path="/register" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Login;