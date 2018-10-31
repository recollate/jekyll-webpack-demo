const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    homepage: "./webpack/homepage.js",
    about: "./webpack/about.js"
  },
  output: {
    path: path.resolve(__dirname, "./src/assets/javascripts/")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};
