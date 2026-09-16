module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: { chunks: 'all' },
    runtimeChunk: 'single',
  },
};
