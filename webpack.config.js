// eslint-disable-next-line no-undef
const path = require('path');
// const autoprefixer = require('autoprefixer');
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
module.exports = {
  "entry": './src/index.js',
  "output": {
    // eslint-disable-next-line no-undef
    "path": path.resolve(__dirname, 'dist'),
    "filename": "bundle[hash].js",
    "chunkFilename": "[id].js",
    "publicPath": "",
  },
  "resolve": {
    "extensions": ['.js', '.jsx'],
    // "fallback": {
    //   // eslint-disable-next-line no-undef
    //   "buffer": require.resolve("buffer/"),
    // }
  },
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "loader": "babel-loader",
        "exclude": /node_modules/,
      },
      {
        "test": /\.(scss|css|sass)$/i,
        "use": [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        "test": /\.(png|jpg|svg|gif)$/,
        "use": ['file-loader']
      }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      // eslint-disable-next-line no-undef
      // "template": __dirname + '/public/index.html',
      // eslint-disable-next-line no-undef
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "body",
    })
  ]

}