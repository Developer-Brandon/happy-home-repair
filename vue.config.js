const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { MiniCssExtractPlugin } = require('mini-css-extract-plugin')
const banner = require('./vue.banner')
const provide = require('./vue.provide')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/whole_style.scss";
        `,
      },
    },
  },
  devServer: { disableHostCheck: true },
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
        },
        // {
        //   test: /.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     loaders: {
        //       scss: 'vue-style-loader!css-loader!sass-loader',
        //     },
        //   },
        // },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     'vue-style-loader',
        //   ],
        // },
        // {
        //   test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: 'url-loader',
        //   options: {
        //     name: '[name].[hash].[ext]',
        //     limit: 10000,
        //   },
        // },
      ],
    },
    // resolve: {
    //   alias: {
    //     '@': path.join(__dirname, 'src/'),
    //   },
    //   extensions: ['*', '.js', '.vue', '.json'],
    // },
    plugins: [
      new webpack.ProvidePlugin(provide),
      new webpack.BannerPlugin(banner),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimize: true,
      concatenateModules: true,
    },
  },
}
