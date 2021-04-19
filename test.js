import * as o from './mod.js'
import test from '../test/mod.js'

o.extend(Object, [o.select], [o.copy])

test.equal('copy', { a: 1, b: { c: { d: 3 } } }.copy, { a: 1, b: { c: { d: 3 } } })

test.equal('select', { a: 1, b: 2, c: 3 }.select('b', 'c'), { b: 2, c: 3 })

test.equal('length', o.length({ a: 1, b: 2, c: 3 }), 3)

test.equal('size', o.size({ a: 1, b: 'bbb', c: true, d: [1, 2, 3] }), 50)
test.equal('size', o.size([1, 2, 3]), 24)