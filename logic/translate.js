// Import
import translate from 'translate'


//Logic
export class Localize {

	#trans
	#key
	#engine
	static #config (key, engine) {
		translate.engine = engine
		translate.key = key
	}

	constructor(trans, key = process.env.GOOGLE_KEY, engine = 'google') {
		this.#trans = trans
		this.#key = key
		this.#engine = engine

		Localize.#config(this.#key, this.#engine)
	}

	async todo (text) {
		return await translate(`${text}`, this.#trans)
	}

}