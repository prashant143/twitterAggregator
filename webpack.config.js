const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
};
