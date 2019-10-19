const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.js',
  },
  output: {
    path: __dirname+'/public',
    filename: '[name].js'
  },
};

