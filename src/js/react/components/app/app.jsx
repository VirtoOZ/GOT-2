import React, { Component } from "react";
import RandChar from "../randChar/randChar.jsx";
import './app.scss';
import img from "./got.jpeg";


export default class App extends Component {



	render() {

		return (
			<>
				<main className="page">
					<section className="random-char random-char__section page__section">
						<div className="random-char__container">
							<ul className="random-char__list list">
								<li className="random-char__item list__item">
									<span className="random-char__label list__label"></span>
									<span className="random-char__value list__value"></span>
								</li>
							</ul>
						</div>
					</section>
					<div className="page__bg">
						<img src={img} alt="bg"></img>
					</div>
				</main>
			</>
		)
	}
}