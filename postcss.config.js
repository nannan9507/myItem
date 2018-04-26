// const { IS_MOBILE } = require('./serve/build/env.config')

let plugins = [
  require('autoprefixer'),
]

// if (IS_MOBILE) {
//   plugins.push(
//     require('postcss-pxtorem')({
//       rootValue: 75,
//       unitPrecision: 5,
//       propList: ['*'],
//       selectorBlackList: [],
//       replace: true,
//       mediaQuery: false,
//       minPixelValue: 12,
//     })
//   )
// }

module.exports = {
  plugins,
}
