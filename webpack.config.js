const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (_, argv) => {
  // Set default mode to development
  const mode = argv.mode || "development";
  const isProd = mode == "production";

  return {
    entry: "./src/js/index.js",
    devtool: isProd ? "source-map" : "inline-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        title: "Sushi Bar | Home",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "resolve-url-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: "./dist",
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
  };
};
