var path = require('path');
module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/app.js",

  // The plain compiled Javascript will be output into this file
  output: {
    path: path.resolve(__dirname, 'public/bundle'),
    filename: 'bundle.js'
  },

  // This section desribes the transformations we will perform
  module: {
    rules: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        options: {
          // These are the specific transformations we'll be using.
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: 'inline-source-map'
};