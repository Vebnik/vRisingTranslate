const fetch = require('node-fetch')
const { transUrl, transBody } = require('./urlParse')


const getTrans = (text) => {

	fetch(transUrl().toString(), {
		headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8"},
		body: transBody(text),
		method: "POST",
	})
		.then(res => res.ok ? res.text() : console.error(res))
		.then(data => {
			const parsArr = data.match(/\[\[([\s\S]+?)]]/g)
			console.log(parsArr)
		})
}

getTrans('Shield self and nearby enemy')
