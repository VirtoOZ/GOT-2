import React, { Component } from "react";
import Header from "../header/header.jsx";
import RandChar from "../randChar/randChar.jsx";
import DetalesChar from "../detalesChar/detalesChar.jsx";
import ItemList from "../itemList/itemList.jsx";
import './app.scss';
import img from "./got.jpeg";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.onHideRandomChar = this.onHideRandomChar.bind(this);
	}

	onHideRandomChar() {
		return !onHide;
	}

	render() {

		return (
			<>
				<Header />
				<main className="page">
					<RandChar onHide={onHide} />
					<div className="page__section">
						<div className="section__container">
							<button
								className="togle__btn"
							// onClick={onHideRandomChar}
							>
								Togle
							</button>
						</div>
					</div>
					<div className="section__box">
						<div className="section__container">
							<ItemList />
							<DetalesChar />
						</div>
					</div>
					<div className="page__bg">
						<img src={img} alt="bg"></img>
					</div>
				</main>
			</>
		)
	}
}