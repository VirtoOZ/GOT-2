export default class GotService {
	constructor() {
		this._ApiBase = `https://www.anapioficeandfire.com/api`;
	}

	getResurce = async (url) => {
		const result = await fetch(url);
		if (!result.ok) {
			throw new Error(`Coud not fetch: ${url}, status: ${result.status}`);
		}
		return result.json();
	}

	// Персонажи:
	getCharacter = async (id) => {
		const char = await this.getResurce(`${this._ApiBase}/characters/${id}`);
		return this._transformCharacter(char);
	}

	getAllCharacters = async () => {
		const char = await this.getResurce(`${this._ApiBase}/characters?page=5&pageSize=10`);
		return char.map(this._transformCharacter);
	}

	// Книги:
	getBook = async (id) => {
		const book = await this.getResurce(`${this._ApiBase}/books/${id}`);
		return this._transformBook(book);
	}

	getAllBooks = async () => {
		const books = await this.getResurce(`${this._ApiBase}/books?=3&pageSize=10`);
		return books.map(this._transformBook);
	}

	// Дома:
	getHouse = async (id) => {
		const house = await this.getResurce(`${this._ApiBase}/houses/${id}`);
		return this._transformHouses(house);
	}

	getAllHouses = async () => {
		const houses = await this.getResurce(`${this._ApiBase}/houses?page=5&pageSize=10`);
		return houses.map(this._transformHouses);
	}

	getId = (item) => item.url.match(/\/([0-9]*)$/)[1];

	isData = (data) => data ? data : 'no data';

	_transformCharacter = (char) => {
		return {
			id: this.getId(char),
			name: this.isData(char.name),
			gender: this.isData(char.gender),
			born: this.isData(char.born),
			died: this.isData(char.died),
			culture: this.isData(char.culture),
		}
	}

	_transformBook = (book) => {
		return {
			id: this.getId(book),
			name: this.isData(book.name),
			authors: this.isData(book.authors),
			country: this.isData(book.country),
			numberOfPages: this.isData(book.numberOfPages),
			mediaType: this.isData(book.mediaType),
		}
	}

	_transformHouses = (house) => {
		return {
			id: this.getId(house),
			name: this.isData(house.name),
			region: this.isData(house.region),
			words: this.isData(house.words),
			coatOfArms: this.isData(house.coatOfArms),
		}
	}

}