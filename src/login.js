import React from "react";
import "./login.css";

export default class Login extends React.Component {
   render() {
      return (
         <>
            <div className="top">topbar</div>
            <div className="container">
               <form className="item">
                  <label for="email">Email</label>
                  <input type="text" id="email" placeholder="email" />
                  <label for="password">Password</label>
                  <input type="password" id="password" placeholder="password" />
                  <input type="submit" />
               </form>
            </div>
         </>
      );
   }
}
