import React, { Component } from "react";
import Header from "../header/header.jsx";
import RandChar from "../randChar/randChar.jsx";
import CharacterPage from "../characterPage/characterPage.jsx";
import './app.scss';
import img from "./got.jpeg";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesChar from "../detalesChar/detalesChar.jsx";
import ItemList from "../itemList/itemList.jsx";
import GotService from "../../services/gotService.jsx";


const SectionBox = ({ children }) => {
	return (
		<div className="section__box">
			<div className="section__container">
				{children}
			</div>
		</div>
	)
};

export default class App extends Component {

	gotService = new GotService();

	state = {
		onHide: false,
		selectedChar: 130,
		error: false,
		onData: "character",
	};

	componentDidCatch() {
		// console.log('error');
		this.setState({ error: true });
	}

	onSelectData() {
		const { onData } = this.state;
		if (onData === 'book') {
			return
		}
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const { onHide } = this.state;
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
								onClick={() => this.setState({ onHide: !onHide })}>
								Togle
							</button>
						</div>
					</div>
					<SectionBox>
						<CharacterPage onData={onData} />
					</SectionBox>
					<SectionBox>
						<ItemList
							onItemSelected={this.onItemSelected}
							getData={this.gotService.getAllBooks}
							renderItem={(item) => item.name} />
						<DetalesChar
							charId={this.state.selectedChar} />
					</SectionBox>
					<SectionBox>
						<ItemList
							onItemSelected={this.onItemSelected}
							getData={this.gotService.getAllHouses}
							renderItem={(item) => item.name} />
						<DetalesChar
							charId={this.state.selectedChar} />
					</SectionBox>
					<div className="page__bg">
						<img src={img} alt="bg"></img>
					</div>
				</main>
			</>
		)
	}
}