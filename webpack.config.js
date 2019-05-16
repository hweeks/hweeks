if (process.env.IS_DEV) {
  require('./server/')
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    main: "./src/index.js",
    vendor: ['react', 'react-dom'],
  },
  devtool: "eval-source-map",
  output: {
    path: `${__dirname}/static`,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
       {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env","@babel/preset-react"]
        }
      },
      {
        test: /\.(png|pdf|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    proxy: {
      '/post*': 'http://localhost:3000',
      '/post/*': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hweeks.com - a website',
      template: './static/index-template.html'
    }),
  ]
}
