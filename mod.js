export function copy(o) {
	return JSON.parse(JSON.stringify(o))
}


// export function extend(object, functions = [], getter = [], setter = []) {
export function extend(object, ...p) {
	// p == functions, getter, setter
	let n = ['value', 'get', 'set']
	for (let i in p)
		for (let f of p[i] ?? [])
			Object.defineProperty(object.prototype, f.name, { [n[i]]: function (...p) { return f(this, ...p) } })
}

export function select(object, ...keys) {
	return Object.fromEntries(
		Object.entries(object)
			.filter(([key]) => keys.includes(key))
	)
}

export function length(object) {
	return Object.keys(object).length
}

export function size(x) {
	switch (typeof x) {
		case 'number': return 8
		case 'boolean': return 4
		case 'string': return x.length * 2
		case 'object':
			if (Array.isArray(x)) return x.reduce((acc, val) => acc + size(val), 0)
			else return size(Object.keys(x)) + size(Object.values(x))
	}
	return 0
}