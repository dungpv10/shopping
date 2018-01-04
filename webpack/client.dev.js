const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../client'),
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
      //front-end
    './src/index.js',
    './res/scss/main.scss',
      './res/scss/font-awesome.min.css',
      './res/scss/animate.css',
      './res/scss/price-range.css',
      // './res/scss/prettyPhoto.css',
      './res/scss/responsive.css',
      './res/scss/custom.css',
      './res/js/index.js',
  ],
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: './js/index.js',
    publicPath: '/',
  },

  devServer: {
    // hot: true,
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../server/views/index.dev.ejs'),
      inject: false,
    }),
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
          // In case you imported plugins individually, you must also require them here:
          Util: "exports-loader?Util!bootstrap/js/dist/util",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      }),
      new webpack.DefinePlugin({
          'process.env': {
            'api_url': JSON.stringify("http://localhost:3000/")
          },
      })
  ]
};