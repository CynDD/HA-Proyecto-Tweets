import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import LoginForm from "./features/user/LoginForm";
import SignupForm from "./features/user/SignupForm";
import Tweets from "./features/tweet/Tweets";
import TweetForm from "./features/tweet/TweetForm";
import PrivateRoute from "./components/PrivateRoute";
import Private from "./components/Private";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="list">
          <li className="element">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="element">
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="element">
            <NavLink to="/signup" activeClassName="active">
              Sign up
            </NavLink>
          </li>
          <li className="element">
            <NavLink to="/logout" activeClassName="active">
              Log out
            </NavLink>
          </li>
          <li className="element">
            <NavLink to="/tweets" activeClassName="active">
              Tweets
            </NavLink>
          </li>
          <li className="element">
            <NavLink to="/new-tweet" activeClassName="active">
              New Tweet
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Switch>
        <Route exact path="/login/:user?" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/tweets" component={Tweets} />
        <Route exact path="/new-tweet/:user?" component={TweetForm} />
        <PrivateRoute exact path="/private" component={Private} />
        <Redirect to="/tweets" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
