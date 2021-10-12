const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

const mode = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  devtool: 'eval-source-map',
  mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
    port: isDev ? 8000 : 4000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: path.resolve("public", "favicon.svg"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.s[ac]ss$/i,
        exclude: /.scoped.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
            
          },

          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
                sourceMap: true,
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: `@import "./src/styles/additionalData.scss";`
            },
          },
        ],
      },

      {
        test: /.scoped.s[ac]ss$/i,
        use: [
          "style-loader",

          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
                mode: "local",
              },
              sourceMap: true,
            },
            
          },

          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
                sourceMap: true,
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: `@import "./src/styles/additionalData.scss";`
            },
          },
        ],
      },

      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss", "png"],
  },
};
