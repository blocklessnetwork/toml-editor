const path = require('path');

module.exports = {
  target: 'node',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.json'] // 自动解析的扩展名
  }
};