const withReactSvg = require('next-react-svg')

const path = require('path')

module.exports = withReactSvg({
  include: path.resolve('src/assets'),
  webpack(config) {
    return config
  }
})
