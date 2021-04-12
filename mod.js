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