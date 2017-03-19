'use strict'

/**
 * @fileoverview no module.export
 * @author magicdawn
 */

const message = `found module.export, missing 's'`

module.exports = {
  meta: {
    docs: {
      description: 'no module.export',
      category: 'Possible Errors',
      recommended: true
    },
    fixable: 'code',
    schema: [] // no options
  },
  create: function(context) {
    return {
      'AssignmentExpression > MemberExpression': function(node) {
        if (node.object.name !== 'module') return
        const ref = node.property.name
        if (ref === 'export') {
          context.report({
            node,
            message,
            fix(fixer) {
              return fixer.insertTextAfter(node, 's')
            }
          })
        }
      }
    }
  }
}