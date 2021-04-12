import * as o from './mod.js'
import test from '../test/mod.js'

o.extend(Object, [o.select], [o.copy])

test.equal('copy', { a: 1, b: { c: { d: 3 } } }.copy, { a: 1, b: { c: { d: 3 } } })

test.equal('select', { a: 1, b: 2, c: 3 }.select('b', 'c'), { b: 2, c: 3 })