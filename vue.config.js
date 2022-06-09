const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/login-app-firebase/'
    : '/'
}