const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin') // Ding

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new NodemonPlugin(), // Dong
  ],
  target: 'node',
  watch: true,
  externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
}
