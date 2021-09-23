import React from "react";
// import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";
import UpdateForm from "./components/UpdateForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/update/:id"
          //   component={(props) => <UpdateForm {...props.location.state} />}
          component={UpdateForm}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
