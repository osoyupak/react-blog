import TopBar from "./components/topbar/TopBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import React from "react";

import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
