import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./features/user/LoginForm";
import SignupForm from "./features/user/SignupForm";
import Tweets from "./features/tweet/Tweets";
import TweetForm from "./features/tweet/TweetForm";
import PrivateRoute from "./components/PrivateRoute";
import Private from "./components/Private";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

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
