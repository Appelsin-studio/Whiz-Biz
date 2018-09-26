var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var smartgrid = require('smart-grid')

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              extractCSS: true,
              loaders: {
                'scss': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader',
                ],
                'sass': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader?indentedSyntax',
                ],
              },
            },
          },
          {
            loader: 'vue-svg-inline-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src'),
          path.resolve('test'),
          path.resolve('node_modules/vue-particles')]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
          outputPath: 'css/img',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'css/fonts/',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets/.htaccess',
        to: '[name].[ext]',
      },
      {
        from: './src/assets/img',
        to: 'img/[path][name].[ext]',
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'trading view',
      hash: true,
      template: __dirname + '/index.html',
      filename: __dirname + '/dist/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      components: path.resolve('./src/components'),
      assets: path.resolve('./src/assets'),
    },
    modules: [
      path.resolve('./src/assets'),
      path.resolve('./node_modules'),
    ],
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ])
}

var smartgridSettings = {
  outputStyle: 'less', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '20px', /* gutter width px || % */
  mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
    maxWidth: '1200px', /* max-width оn very large screen */
    fields: '10px' /* side fields */
  },
  breakPoints: {
    lg: {
      width: '1170px' /* -> @media (max-width: 1100px) */
    },
    md: {
      width: '992px'
    },
    sm: {
      width: '767px',
    },
    xm: {
      width: '590px'
    },
    xs: {
      width: '425px'
    }
  }
};

smartgrid('./src/assets/less', smartgridSettings);

