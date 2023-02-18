const path = require("path");

module.exports = {
  entry: {
    unity: "./src/unity/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    compress: true,
    port: 3000
  }
};
