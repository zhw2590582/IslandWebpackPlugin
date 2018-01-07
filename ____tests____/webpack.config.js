const path = require('path');
const IslandWebpackPlugin = require('..');

module.exports = options => ({
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  entry: __dirname,
  plugins: [new IslandWebpackPlugin(options)]
});
