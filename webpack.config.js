const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  // entry points of our application
  entry: {
    main: './src/js/main.js',
  },
  // destination directory and filenames of compiled resources
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  // development options
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: false,
    port: 8080,
    open: true
  },
  // loaders
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
              presets: [
                  "@babel/preset-env"
              ]
          }
        }
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                importLoaders: 2,
                sourceMap: true,
                url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          'sass-loader'
        ],
      },
      // Pug Templates
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ],
  },
  plugins: [
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "[id].css"
    }),
    // Includes Pug Templates into compilation
    new HtmlWebpackPlugin({
      template:      './src/pug/pages/index.pug',
      scriptLoading: "blocking"
    }),
    // Copy Bootstrap Icons into dist
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.join(__dirname, "node_modules/bootstrap-icons/font/fonts"),
              destination: "./dist/fonts"
            }
          ]
        }
      }
    })
  ],
};
