// import
import { Localize } from './logic/translate'
import { parsJson } from './logic/parsJson'
const path = require('path')

// Constructor
const localize = new Localize('ru', process.env.DEEPL_KEY, 'deepl')

// Logic
const paths = {
	source: (name) => path.join('translated', `${name}.json`),
	dist: (name) => path.join('translated', `${name}.json`)
}

const trans = () => {

	parsJson(paths.source('English.json')).then(textArr => {

		return textArr.Nodes.map(async el => {
			const guid = el.Guid
			const text = el.Text

			const prom = await new Promise(resolve => {
				localize.todo(text).then(transText => { resolve(transText) })
			})

			await Promise.all([prom])

			return {
				"Guid": `${guid}`,
				"Text": `${prom}`
			}

		})
	})
		.then(niceTrans => { console.log(niceTrans) })
		.catch(err => console.log(err))
}

trans()