const test = require('ava')

test('langues-regionales.json', t => {
  const languesRegionales = require('./langues-regionales.json')
  t.true(Array.isArray(languesRegionales))

  for (const langueRegionale of languesRegionales) {
    t.deepEqual(Object.keys(langueRegionale), ['code', 'label'])
    t.true(typeof langueRegionale.code === 'string')
    t.true(langueRegionale.code.length > 0)
    t.true(typeof langueRegionale.label === 'string')
    t.true(langueRegionale.label.length > 0)
  }

  const codes = new Set(languesRegionales.map(l => l.code))
  t.true(codes.size === languesRegionales.length)
})