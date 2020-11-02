const path = require('path');

const SRC_DIR = path.join(__dirname, '/Client/Components');
const PUBLIC_DIR = path.join(__dirname, '/Public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};