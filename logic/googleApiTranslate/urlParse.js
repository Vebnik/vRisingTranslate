module.exports = {
	transUrl: () => new URL('https://translate.google.com/_/TranslateWebserverUi/data/batchexecute'),
	transBody: (text) => {
		return `f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22${text}%5C%22%2C%5C%22en%5C%22%2C%5C%22ru%5C%22%2Ctrue%5D%2C%5Bnull%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AD08yZmNLQdi3Y9pgjLVOO4rg6ZT%3A${+new Date()}&`
	}
}