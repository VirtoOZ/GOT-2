import React, { Component } from "react";
import "./randChar.scss";
import GotService from "../../services/gotService.jsx";

export default class RandChar extends Component {

	state = { data: '', }

	getService = new GotService();

	componentDidMount() {
		this.updateCharacter();
	}

	updateCharacter() {
		this.getService.getCharacter(20)
			.then(this.updateData);
	}

	updateData = (data) => {
		this.setState({ data });
		console.log(this.state);
	}

	render() {
		const { name, gender, born, died, culture } = this.state.data;

		return (
			<section className="random-char random-char__section page__section">
				<div className="random-char__container">
					<ul className="random-char__list list">
						<li className="random-char__title list__title">
							<span className="random-char__label list__label">Random Character: </span>
							<span className="random-char__value list__value">{name}</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Gender</span>
							<span className="random-char__value list__value">{gender}</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Born</span>
							<span className="random-char__value list__value">{born}</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Died</span>
							<span className="random-char__value list__value">{died}</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Culture</span>
							<span className="random-char__value list__value">{culture}</span>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}