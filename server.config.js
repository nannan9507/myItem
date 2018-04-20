module.exports = {
  appPort: 9000,
  webpackDevServerPort: 9003,
  proxy: {
    '/api': 'http://localhost:4005',
  },
}