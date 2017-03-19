'use strict'

module.exports = {
  rules: require('./lib/rules'),

  configs: {
    // auto load this module
    'magicdawn/no-module-export': 'error',
  },
}