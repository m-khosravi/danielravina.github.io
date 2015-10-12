module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/assets/js/index.js",
  output: {
    path: __dirname + "/assets/js",
    filename: "build.js",
  },
  module: {
    loaders: [
      { test: /\.js|jsx$/,  loaders: ['jsx'], exclude: /(node_modules)/ },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'json'],
    root: __dirname,
    alias: {
      data:  __dirname + '/data',
    },
    unsafeCache: true
  }
}