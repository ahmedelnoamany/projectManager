import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import requireAuth from './src/containers/auth/requireAuth';
import App from './src/containers/app/App';
import LoginForm from './src/containers/auth/LoginForm';
import SignupForm from './src/containers/auth/SignupForm';
import Dashboard from './src/containers/profile/Dashboard';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink(),
  cache,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignupForm} />
          <Route path="dashboard" component={requireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));