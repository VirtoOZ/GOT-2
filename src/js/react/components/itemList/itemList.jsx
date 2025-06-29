import React, { Component } from "react";

export default class ItemList extends Component {
	render() {

		return (
			<>
				<section className="list-char list-char__section page__section">
					<ul className="list-char__list list">
						<li className="list-char__title list__title">
							<span className="list-char__label list__label">Random Character: </span>
							<span className="list-char__value list__value"></span>
						</li>
					</ul>
				</section>
			</>
		)
	}
}