const fs = require('fs')
const path = require('path')


const getText = async () => {

	const data = new Promise(resolve => {
		fs.readFile(path.join('..', 'translated', 'English.json'), (err, data) => {
			if (err) return console.error(err)
			resolve(data)
		})
	})

	data.then(el => {
		const textStr = JSON.parse(el).Nodes.map(text => text.Text)

		fs.writeFile(path.join('..', 'translated', 'EnglishText.txt'), textStr.join('|'), err => err ? console.error(err) : null)
	})
}

const getRuText = async () => {

	const data = new Promise(resolve => {
		fs.readFile(path.join('..', 'translated', 'vRisingRu.txt'), 'utf-8', (err, data) => {
			if (err) return console.error(err)
			resolve(data)
		})
	})

	const dataEn = new Promise(resolve => {
		fs.readFile(path.join('..', 'translated', 'English.json'), 'utf-8', (err, data) => {
			if (err) return console.error(err)
			resolve(data)
		})
	})

	dataEn.then(async el => {

		await data.then(ruText => {
			return ruText.split('|').map(el => el.replace(/\r\n|Machine Translated by Google/g, ''))
		})
			.then(async text => {
				const ruParsingText = JSON.parse(el).Nodes.map((nodeText, i) => {
					return {
						"Guid": nodeText.Guid,
						"Text": text[i] || 'Empty'
					}
				})

				await fs.writeFile(path.join('..', 'translated', 'RuTextV2.json'), JSON.stringify(ruParsingText), err => err ? console.error(err) : null)
			})

	})
}

getRuText().catch(err => console.error(err ))