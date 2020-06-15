import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// Main UI
import Toolbar from "./components/UIElements/toolbar/Toolbar";
// Auth Routes
import AddItem from "./components/Pages/AddItem";
import AddInventory from "./components/Pages/AddInventory";
import Dashboard from "./components/Pages/Dashboard";
// Unauth Routes
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
// Context
import { AuthContext } from "./components/Functions/auth-context";

const App = () => {
  // Initial login states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/:userId/addItem">
          <AddItem />
        </Route>
        <Route path="/:userId/addInventory">
          <AddInventory />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  // Returns
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Toolbar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
