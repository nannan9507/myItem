const path = require('path')
const serverConfig = require('./server.config')

module.exports = {
  // 主服务启动端口,不同的环境不一样,不能在这里写死
  appPort: serverConfig.appPort,
  webpackDevServerPort: serverConfig.webpackDevServerPort,
  // webpack的差异化配置
  webpack: {
    entry: {
      app: path.join(__dirname, 'client/entry-client.js'),
    },
  },
}
