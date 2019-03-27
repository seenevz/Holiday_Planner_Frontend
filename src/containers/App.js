import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Login from "../components/Login";
import NavBar from "../components/NavBar";
import HomeContainer from "./HomeContainer";
import "../style/index.css";
import Modal from "../components/Modal";

class App extends Component {
   render() {
      return (
         <>
            <Switch>
               <Route
                  exact
                  path="/"
                  component={routerProps => <Login {...routerProps} />}
               />
               <Route
                  exact
                  path="/home"
                  component={routerProps => <HomeContainer {...routerProps} />}
               />
            </Switch>
         </>
      );
   }
}

export default withRouter(App);
