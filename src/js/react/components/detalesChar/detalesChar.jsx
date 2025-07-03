import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";

const Field = ({ character, field, label }) => {
	return (
		<li className="detales-char__title list__item">
			<span className="detales-char__label list__label">{label}</span>
			<span className="detales-char__value list__value">{character[field]}</span>
		</li>
	)
};

export { Field };

export default class DetalesChar extends Component {
	gotService = new GotService();
	state = { character: null };

	componentDidMount() {
		this.onUpdateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId) {
			this.onUpdateChar();
		}
	}

	onUpdateChar() {
		const { charId } = this.props;
		if (!charId) {
			return;
		}
		this.gotService.getCharacter(charId)
			.then((character) => this.setState({ character }));
		// this.foo.bar = 0;
	}

	render() {
		const { character } = this.state;

		if (!character) {
			return (
				<section className="detales-char detales-char__section page__section">
					<div className="detales-char__list list">
						<span className="">Please select character</span>
					</div>
				</section>
			)
		}

		const { name } = character;

		return (
			<section className="detales-char detales-char__section page__section">
				<ul className="detales-char__list list">
					<h2 className="list__title">{name}</h2>
					{
						React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, { character })
						})
					}
				</ul>
			</section>
		)
	}
}