const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devtool: '#eval-source-map',
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
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
