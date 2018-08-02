var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  mode: 'development',
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR + "/src",
    filename: "bundle.js",
    publicPath: "/src/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["react", "es2015", "stage-2"]
          }
        }
      }
    ]
  }
};

module.exports = config;