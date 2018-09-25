var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "client");

var config = {
  mode: 'development',
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR + "/src",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules|bower_components)/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          query: {
            presets:["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + "/index.html",
      
    }),
  ]
};

module.exports = config;