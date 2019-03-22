import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "../style/navbar.css";

class NavBar extends React.Component {
   handleLogout = () => {
      this.props.clearUser();
      sessionStorage.clear("auth_token");
      this.props.history.push("/");
   };

   render() {
      const { firstName } = this.props.user;

      return (
         <div className="top">
            <div className="user">{firstName}</div>
            <div className="nav-button">
               {firstName && (
                  <button onClick={this.handleLogout}>Logout</button>
               )}
            </div>
         </div>
      );
   }
}

export default withRouter(
   connect(
      state => ({
         user: state.user,
      }),
      dispatch => ({ clearUser: () => dispatch({ type: "CLEAR_USER" }) })
   )(NavBar)
);
