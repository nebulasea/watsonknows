module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      include: /src/,
      loader: "babel-loader",
      query: {
        presets: ["react", "es2015", "stage-0"]
      }
    }]
  },
  devtool: "inline-source-map"
};