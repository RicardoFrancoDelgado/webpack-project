module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].min.js",
    path: __dirname + "/dist"
  },
  mode: "production",
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },{
      test: /\.js$/,
      use: ["babel-loader"]
    }]
  }
}