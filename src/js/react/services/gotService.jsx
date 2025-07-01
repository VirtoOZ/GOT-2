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

	// Персонажи:
	async getCharacter(id) {
		const char = await this.getResurce(`${this._ApiBase}/characters/${id}`);
		return this._transformCharacter(char, id);
	}

	async getAllCharacters() {
		const char = await this.getResurce(`${this._ApiBase}/characters?page=5&pageSize=10`);
		return char.map(this._transformCharacter);
	}

	// Книги:
	async getBook(id) {
		const book = await this.getResurce(`${this._ApiBase}/books/${id}`);
		return this._transformBook(book);
	}

	async getAllBooks() {
		const books = await this.getResurce(`${this._ApiBase}/books?page=1&pageSize=10`);
		return books.map(this._transformBook);
	}

	// Дома:
	async getHouse(id) {
		const house = await this.getResurce(`${this._ApiBase}/houses/${id}`);
		return this._transformHouses(house);
	}

	async getAllHouses() {
		const houses = await this.getResurce(`${this._ApiBase}/houses?page=1&pageSize=10`);
		return houses.map(this._transformHouses);
	}


	_transformCharacter(char, index) {
		return {
			name: char.name ? char.name : 'no data',
			gender: char.gender ? char.gender : 'no data',
			born: char.born ? char.born : 'no data',
			died: char.died ? char.died : 'no data',
			culture: char.culture ? char.culture : 'no data',
			id: index,
		}
	}

	_transformBook(book) {
		return {
			name: book.name ? book.name : 'no data',
			authors: book.authors ? book.authors : 'no data',
			country: book.country ? book.country : 'no data',
			numberOfPages: book.numberOfPages ? book.numberOfPages : 'no data',
			mediaType: book.mediaType ? book.mediaType : 'no data',
		}
	}

	_transformHouses(house) {
		return {
			name: house.name ? house.name : 'no data',
			region: house.region ? house.region : 'no data',
			words: house.words ? house.words : 'no data',
			coatOfArms: house.coatOfArms ? house.coatOfArms : 'no data',
		}
	}

}