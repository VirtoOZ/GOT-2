import React, { Component } from "react";
import Header from "../header/header.jsx";
import RandChar from "../randChar/randChar.jsx";
import CharacterPage from "../characterPage/characterPage.jsx";
import './app.scss';
import img from "./got.jpeg";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import GotService from "../../services/gotService.jsx";
import BookPage from "../bookPage/bookPage.jsx";
import HousePage from "../housePage/housePage.jsx";


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

	// onSelectData() {
	// 	const { onData } = this.state;
	// 	if (onData === 'book') {
	// 		return
	// 	}
	// }

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
						<CharacterPage />
					</SectionBox>
					<SectionBox>
						<BookPage />
					</SectionBox>
					<SectionBox>
						<HousePage />
					</SectionBox>
					<div className="page__bg">
						<img src={img} alt="bg"></img>
					</div>
				</main>
			</>
		)
	}
}