const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { prod_Path, src_Path } = require("./path");
const { selectedPreprocessor } = require("./loader");

module.exports = {
  entry: {
    main: "./" + src_Path + "/scripts/index.js"
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: "[name].[chunkhash].js"
  },
  devtool: "source-map",
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: selectedPreprocessor.fileRegexp,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: true
            }
          },
          {
            loader: selectedPreprocessor.loaderName,
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  externals: {
    moment: "moment"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: "./" + src_Path + "/index.html",
      filename: "index.html"
    })
  ]
};
