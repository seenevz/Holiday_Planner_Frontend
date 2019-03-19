import React, { Component } from "react";
import { CreateStore } from "redux";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Login from "./login";
import NavBar from "./NavBar";

class App extends Component {
   render() {
      return (
         <>
            <NavBar />
            <Login />
         </>
      );
   }
}

export default App;
