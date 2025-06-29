import React, { Component } from "react";

export default class DetalesChar extends Component {
	render() {

		return (
			<section className="detales-char detales-char__section page__section">
				<ul className="detales-char__list list">
					<li className="detales-char__title list__title">
						<span className="detales-char__label list__label">Random Character: </span>
						<span className="detales-char__value list__value"> (id:)</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Gender</span>
						<span className="detales-char__value list__value">gender</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Born</span>
						<span className="detales-char__value list__value">born</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Died</span>
						<span className="detales-char__value list__value">died</span>
					</li>
					<li className="detales-char__item list__item">
						<span className="detales-char__label list__label">Culture</span>
						<span className="detales-char__value list__value">culture</span>
					</li>
				</ul>
			</section>
		)
	}
}