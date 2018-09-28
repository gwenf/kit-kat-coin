const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
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
      },
      {test: /\.css?$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
