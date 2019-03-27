import path from 'path'

export default {
  entry: path.resolve(__dirname, 'src/injected.js'),

  output: {
    filename: 'injected.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  mode: 'production'
}
