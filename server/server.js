const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./services/auth');
const MongoStore = require('connect-mongo')(session);
const schema = require('./schema/schema');

//Creating new express application
const app = express();

//Set up mongoLab uri...
const MONGO_URI = 'mongodb://ahmedE:db123Ahmed@ds135619.mlab.com:35619/auth';

//mongoose promise is deprecated. Replace with ES2015 promise.
mongoose.Promise = global.Promise;

//connect to mongoDB instance...

mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLav instance.'))
  .on('error', error => console.log('Error connecting to MongoLab: ', error));

//configure express to use sessions
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaaabbbccc',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));

//initialize passport into express as a middleware

app.use(passport.initialize());
app.use(passport.session());

//pass any request made to /graphql to the GraphQL instance
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

//respond with output of webpack process if any request comes in for the root route
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;

