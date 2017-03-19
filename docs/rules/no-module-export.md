# no module.export (no-module-export)

report error when `module.export` typo occurs


## Rule Details

This rule aims to kill `module.export` typo

Examples of **incorrect** code for this rule:

```js
module.export = {
  foo: 'bar'
}
```

Examples of **correct** code for this rule:

```js
module.exports = {
  foo: 'bar'
}
```

## Further Reading

- https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_module_exports