import React, { Component } from "react";
import "./randChar.scss";

export default class RandChar extends Component {

	state = { data: '', }

	render() {
		return (
			<section className="random-char random-char__section page__section">
				<div className="random-char__container">
					<ul className="random-char__list list">
						<li className="random-char__title list__title">
							<span className="random-char__label list__label">Random Character: </span>
							<span className="random-char__value list__value">John</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Gender</span>
							<span className="random-char__value list__value">male</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Born</span>
							<span className="random-char__value list__value">1000</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Died</span>
							<span className="random-char__value list__value">1200</span>
						</li>
						<li className="random-char__item list__item">
							<span className="random-char__label list__label">Culture</span>
							<span className="random-char__value list__value">Anarchy</span>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}