const path = require('path');

module.exports = {
  entry: './src/HomePage.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
};
