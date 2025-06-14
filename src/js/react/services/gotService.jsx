export default class GotService {
	constructor() {
		this._ApiBase = `https://www.anapioficeandfire.com/api`;
	}

	async getResurce(url) {
		const result = await fetch(url);
		if (!result.ok) {
			throw new Error(`Coud not fetch: ${url}, status: ${result.status}`);
		}
		return result.json();
	}

	async getCharacter(id) {
		const char = await this.getResurce(`${this._ApiBase}/characters/${id}`);
		return this._transformCharacter(char);
	}

	async getAllCharacters() {
		const char = await this.getResurce(`${this._ApiBase}/characters?page=2&pageSize=10`);
		return this._transformCharacter(char);
	}

	_transformCharacter(char) {
		return {
			name: char.name ? char.name : 'no data',
			gender: char.gender ? char.gender : 'no data',
			born: char.born ? char.born : 'no data',
			died: char.died ? char.died : 'no data',
			culture: char.culture ? char.culture : 'no data',
		}
	}

}