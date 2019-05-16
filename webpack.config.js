const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: `${__dirname}/client/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  // plugins: [
  //   new CompressionPlugin({
  //     filename: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0.7
  //   }),
  //   new BrotliPlugin({
  //     filenme: '[path].br[query]',
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0.7
  //   })
  // ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  }
};
