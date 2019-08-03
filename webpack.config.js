const path = require("path");
// input to html template
const HtmlWebpackPlugin = require("html-webpack-plugin");
// output css to file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.js"
  },

  devServer: {
    publicPath: "/",
    port: 9000,
    contentBase: path.join(process.cwd(), "dist"),
    host: "localhost",
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    hot: true
  },
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "")],
        loader: "babel-loader",
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /(png|jpe?g|gif|svg|woff2?)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[path][name].[ext]"
          }
        }
      }
    ]
  },

  output: {
    chunkFilename: "[name].js",
    filename: "assets/js/[name].js"
  },

  mode: "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    })
  ]
};
