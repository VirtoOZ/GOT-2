import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";


export default class DetalesChar extends Component {
	gotService = new GotService();
	state = { character: null };

	componentDidMount() {
		this.onUpdateChar();

		console.log(this.props.charId);
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
		this.foo.bar = 0;
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
		const { name, gender, born, died, culture } = this.state.character;
		return (
			<section className="detales-char detales-char__section page__section">
				<ul className="detales-char__list list">
					<li className="detales-char__title list__title">
						<span className="detales-char__label list__label">Detales Character: {name}</span>
						<span className="detales-char__value list__value"> (id:{this.props.charId})</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Gender</span>
						<span className="detales-char__value list__value">{gender}</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Born</span>
						<span className="detales-char__value list__value">{born}</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Died</span>
						<span className="detales-char__value list__value">{died}</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Culture</span>
						<span className="detales-char__value list__value">{culture}</span>
					</li>
				</ul>
			</section>
		)
	}
}