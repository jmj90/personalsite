const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: () => new Promise((resolve) => resolve([
      '@babel/polyfill', // enables async-await
      './client/index.js',
      './client/components/Lander.js',
      './client/components/Projects.js'
    ])),
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
