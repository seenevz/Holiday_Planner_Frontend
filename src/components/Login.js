import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { connect } from "react-redux";

import "../style/login.css";

const LOGIN_MUTATION = gql`
   mutation LoginMutation($email: String!, $password: String!) {
      signinUser(credentials: { email: $email, password: $password }) {
         token
         user {
            firstName
            currency
         }
      }
   }
`;

const SIGNUP_MUTATION = gql`
   mutation SignupMutation(
      $firstName: String!
      $lastName: String!
      $currency: String!
      $email: String!
      $password: String!
   ) {
      createUser(
         firstName: $firstName
         lastName: $lastName
         currency: $currency
         authProvider: { credentials: { email: $email, password: $password } }
      ) {
         id
         firstName
         currency
      }
   }
`;

class Login extends React.Component {
   state = {
      login: true,
      firstName: "",
      lastName: "",
      password: "",
      currency: "",
      email: "",
   };

   onChangeInput = event => {
      this.setState({ [event.target.name]: event.target.value });
   };

   onClickSignup = () => this.setState({ login: !this.state.login });

   _confirm = async data => {
      try {
         const token = data.signinUser.token;
         const user = data.signinUser.user;

         this._saveUserData(token);
         this.props.addUser({ ...user });
         this.props.history.push("/home");
      } catch (error) {
         console.warn(error);
      }

      // debugger;
   };

   _saveUserData = token => {
      sessionStorage.setItem("authToken", token);
   };

   render() {
      const {
         login,
         firstName,
         lastName,
         password,
         currency,
         email,
      } = this.state;

      return (
         <>
            <div className="container">
               <div className="item">
                  <h3>{login ? "Login" : "Signup"}</h3>
                  <Mutation
                     mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                     variables={{
                        email,
                        password,
                        firstName,
                        lastName,
                        currency,
                     }}
                     onCompleted={data => this._confirm(data)}
                  >
                     {mutation => (
                        <form
                           onSubmit={event => {
                              event.preventDefault();
                              mutation();
                           }}
                        >
                           {!login && (
                              <div>
                                 <label htmlFor="first-name">First Name</label>
                                 <input
                                    name="firstName"
                                    type="text"
                                    id="first-name"
                                    value={firstName}
                                    onChange={this.onChangeInput}
                                 />
                                 <label htmlFor="last-name">Last Name</label>
                                 <input
                                    name="lastName"
                                    type="text"
                                    id="last-name"
                                    value={lastName}
                                    onChange={this.onChangeInput}
                                 />
                                 <label htmlFor="currency">currency</label>
                                 <input
                                    name="currency"
                                    type="text"
                                    id="currency"
                                    value={currency}
                                    onChange={this.onChangeInput}
                                 />
                              </div>
                           )}
                           <label htmlFor="email">Email</label>
                           <input
                              name="email"
                              type="text"
                              id="email"
                              value={email}
                              onChange={this.onChangeInput}
                           />
                           <label htmlFor="password">Password</label>
                           <input
                              name="password"
                              type="password"
                              id="password"
                              value={password}
                              onChange={this.onChangeInput}
                           />

                           <input type="submit" />
                        </form>
                     )}
                  </Mutation>
                  <div onClick={this.onClickSignup}>
                     <h4>{login ? "Signup" : "Login"}</h4>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   addUser: user => dispatch({ type: "ADD_USER", user }),
});

export default connect(
   null,
   mapDispatchToProps
)(Login);
