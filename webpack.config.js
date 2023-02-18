const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    unity: "./src/unity.ts",
    flash: "./src/flash.ts"
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
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public" },
        { from: "node_modules/@ruffle-rs" },
        { from: "cdn", to: "cdn" }
      ]
    })
  ]
};
