module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/js/start.js']
  },
  output: {
    path: './src',
    filename: 'src.build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist/,
        loader: 'babel?optional[]=runtime&loose=true'
      }
    ]
  },
  devtool: 'source-map'
}
