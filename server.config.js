const constants = require('./dev-constant')

module.exports = {
  appPort: 9000,
  webpackDevServerPort: 9001,
  proxy: {
    '/api': constants.mossTargets.server,
  },
}
