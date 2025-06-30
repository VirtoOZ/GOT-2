import React, { Component } from "react";
import Header from "../header/header.jsx";
import RandChar from "../randChar/randChar.jsx";
import DetalesChar from "../detalesChar/detalesChar.jsx";
import ItemList from "../itemList/itemList.jsx";
import './app.scss';
import img from "./got.jpeg";

export default class App extends Component {

	state = {
		onHide: false,
		selectedChar: 130,
	};

	onCharSelected = (id) => this.setState({ selectedChar: id });

	render() {
		const { onHide, selectedChar } = this.state;
		const randomBlock = onHide ? <></> : <RandChar />;

		return (
			<>
				<Header />
				<main className="page">
					{randomBlock}
					<div className="page__section">
						<div className="section__container">
							<button
								className="togle__btn"
								onClick={() => this.setState({ onHide: !onHide })}
							>Togle</button>
						</div>
					</div>
					<div className="section__box">
						<div className="section__container">
							<ItemList onCharSelected={() => this.onCharSelected()} />
							<DetalesChar charId={selectedChar} />
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