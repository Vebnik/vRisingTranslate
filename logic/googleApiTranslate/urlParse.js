module.exports = {
	transUrl: () => new URL('https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=%2F&f.sid=-4467711888380276945&bl=boq_translate-webserver_20220518.04_p0&hl=ru&soc-app=1&soc-platform=1&soc-device=1&_reqid=347225&rt=c'),
	transBody: (text) => {
		return `f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22${text}%5C%22%2C%5C%22en%5C%22%2C%5C%22ru%5C%22%2Ctrue%5D%2C%5Bnull%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AD08yZn3m8BFc8N7QjhksWWXRiZS%3A${+new Date()}&`
	}
}