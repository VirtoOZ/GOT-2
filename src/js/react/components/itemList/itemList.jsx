import React, { Component } from "react";
import Spinner from "../spinner/spinner.jsx";
import "./itemList.scss"

export default class ItemList extends Component {

	state = { itemList: null };

	componentDidMount() {
		const { getData } = this.props;
		getData()
			// this.gotService.getAllCharacters()
			.then((itemList) => {
				this.setState({ itemList })
			});
	}

	renderItemList(arr) {
		return arr.map((item) => {
			const { onItemSelected } = this.props;
			const label = item.name;
			const id = +item.id;
			// const label = this.props.renderItem(item);

			return (
				<li
					key={id}
					className="list-char__item list__item"
					onClick={() => onItemSelected(id)}>
					<span
						className="list-char__label list__label">
						{label}
					</span>
				</li>
			)
		})
	}

	render() {
		const { itemList } = this.state;
		const itemsList = !itemList ? <Spinner /> : this.renderItemList(itemList);

		return (
			<section className="list-char list-char__section page__section">
				<ul className="list-char__list list">
					{itemsList}
				</ul>
			</section>
		)
	}
}