const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Entry file path
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Output file name
  },
};
