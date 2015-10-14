module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/src/js/index.js",
  output: {
    path: __dirname + "/src/js",
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