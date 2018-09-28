const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    // vue: 'vue',
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', {
              loader: 'css-loader'
            }],
            js: [
              'babel-loader',
            ]
          },
          cacheBusting: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src')
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
