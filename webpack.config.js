const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: './',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // set the app folder to be where the server defaults to
    publicPath: '/', // makes sure it's served from the right place
    watchContentBase: true, // reload on static file changes
    hotOnly: true,
    overlay: true, // will display error message where the page should render as well as console
    port: 9000,
    // proxy: {
    //   "/initialState": {
    //     target: "http://localhost:9001/",
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   "/mongoState": {
    //     target: "http://localhost:9001/",
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
  optimization: {
    namedModules: true,
  },
  resolve: {
    alias: { app: path.resolve(__dirname, 'src/') },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false,
              // modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { outputStyle: 'expanded' },
            },
          },
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
};
