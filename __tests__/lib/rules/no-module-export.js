/**
 * @fileoverview no module.export
 * @author magicdawn
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester()

const rule = require('../../../lib/rules/no-module-export')
ruleTester.run('no-module-export', rule, {
  valid: [`module.exports = { foo: 'bar' }`],

  invalid: [
    {
      code: `module.export = { foo: 'bar' }`,
      errors: [
        {
          message: `found module.export, missing 's'`,
          type: 'MemberExpression',
        },
      ],
    },
  ],
})
