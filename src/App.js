import TopBar from "./components/topbar/TopBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import React from "react";

import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{loggedIn ? <Home /> : <Register />}</Route>
          <Route path="/login">{loggedIn ? <Home /> : <Login />}</Route>
          <Route path="/write">{loggedIn ? <Write /> : <Login />}</Route>
          <Route path="/settings">{loggedIn ? <Settings /> : <Login />}</Route>
          <Route path="/single"><Single /></Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
