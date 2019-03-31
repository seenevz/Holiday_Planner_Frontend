import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { setContext } from "apollo-link-context";
import { reducer } from "./reducers/combineReducers";

const httpLink = createHttpLink({
   uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
   const token = sessionStorage.getItem("authToken");
   return {
      headers: {
         ...headers,
         authorization: token ? `${token}` : "",
      },
   };
});

const defaultOptions = {
   watchQuery: {
      fetchPolicy: "network-only",
      errorPolicy: "ignore",
   },
   query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
   },
};

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
   defaultOptions: defaultOptions,
});

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
   <Router>
      <ApolloProvider client={client}>
         <Provider store={store}>
            <App />
         </Provider>
      </ApolloProvider>
   </Router>,
   document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
