const isDev = process.env.NODE_ENV === 'development'

module.exports = {
mode: isDev ? 'development' : 'production',
  entry: {
      polyfill: '@babel/polyfill', // enables async-await
      index: './client/index.js',
      lander: './client/components/Lander.js',
      projects: './client/components/Projects.js',
    },
  output: {
    path: __dirname,
    filename: './public/bundles/[name].bundle.js'
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
