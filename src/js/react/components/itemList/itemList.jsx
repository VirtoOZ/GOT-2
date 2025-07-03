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
		return arr.map((item, index) => {
			const { onItemSelected } = this.props;
			const label = this.props.renderItem(item);

			return (
				<li
					key={index}
					className="list-char__item list__item"
					onClick={() => onItemSelected(41 + index)}>
					<span
						className="list-char__label list__label">
						{label}
						{/* {item.name} */}
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