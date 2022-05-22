// import
import {Localize} from './logic/translate'
const path = require('path')

// Constructor
const localize = new Localize('ru', process.env.DEEPL_KEY, 'deepl')

// Logic
const paths = {
	source: (name) => path.join('translated', `${name}.json`),
	dist: (name) => path.join('translated', `${name}.json`)
}

const trans = (text) => {

	localize.todo(text).then(transText => {
		console.log(transText)
	})

}

trans('Hello Nikita, bice to meet you')