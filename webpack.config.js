const { merge } = require('webpack-merge');

const common = require('./webpack/webpack.common');
const dev = require('./webpack/webpack.dev');
const prod = require('./webpack/webpack.prod');

module.exports = (env = {}) => {
  const isProd = env.mode === 'production';

  return merge(common, isProd ? prod : dev);
};