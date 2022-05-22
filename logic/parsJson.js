// import
const fs = require('fs')
const ph = require('path')

// logic
export async function parsJson (path) {

	const prom = new Promise(resolve => {
		fs.readFile(ph.join('..', path), 'utf-8', (err, data) => {
			if (err) return console.error(err)
			resolve(data)
		})
	})

	await Promise.all([prom])
	return prom
}