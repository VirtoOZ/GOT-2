import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";


export default class ItemList extends Component {

	gotService = new GotService();
	state = { characterList: null };

	componentDidMount() {
		this.gotService.getAllCharacters()
			.then((characterList) => {
				this.setState({ characterList })
			});
	}

	renderItemList(arr) {
		return arr.map((item, index) => {
			const { onCharSelected } = this.props;
			return (
				<li
					key={index}
					className="list-char__title list__title"
					onClick={() => onCharSelected(index)}>
					<span
						className="list-char__label list__label">
						{item.name}
					</span>
				</li>
			)
		})
	}

	render() {
		const { characterList } = this.state;

		if (!characterList) {
			return <Spinner />
		}

		const itemList = this.renderItemList(characterList);

		return (
			<section className="list-char list-char__section page__section">
				<ul className="list-char__list list">
					{itemList}
				</ul>
			</section>
		)
	}
}