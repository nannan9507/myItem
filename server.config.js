const constants = require('./dev-constant')

module.exports = {
  appPort: 9000,
  proxy: {
    '/api': constants.mossTargets.server,
  },
}