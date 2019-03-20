import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";

class App extends Component {
   render() {
      return (
         <>
            <NavBar />
            <Switch>
               <Route exact path="/" component={Login} />
            </Switch>
         </>
      );
   }
}

export default withRouter(App);
