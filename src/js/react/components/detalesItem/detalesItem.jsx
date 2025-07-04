import React, { Component } from "react";
import ErrorMessage from "../errorMessage/errormessage.jsx";

const Field = ({ item, field, label }) => {
	return (
		<li className="detales-char__title list__item">
			<span className="detales-char__label list__label">{label}</span>
			<span className="detales-char__value list__value">{item[field]}</span>
		</li>
	)
};

export { Field };

export default class DetalesItem extends Component {

	state = { item: null };

	componentDidMount() {
		this.onUpdateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.onUpdateItem();
		}
	}

	onUpdateItem() {
		const { itemId, getData } = this.props;

		if (!itemId) {
			return;
		}
		getData(itemId)
			.then((item) => {
				this.setState({ item });
			});
		// this.foo.bar = 0;
	}

	render() {
		const { item } = this.state;

		if (!item) {
			return (
				<section className="detales-char detales-char__section page__section">
					<div className="detales-char__list list">
						<span className="">Please select character</span>
					</div>
				</section>
			)
		}

		const { name } = item;

		return (
			<section className="detales-char detales-char__section page__section">
				<ul className="detales-char__list list">
					<h2 className="list__title">{name}</h2>
					{
						React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, { item })
						})
					}
				</ul>
			</section>
		)
	}
}