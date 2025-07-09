import React, { useState } from "react";
import Header from "../header/header.jsx";
import RandChar from "../randChar/randChar.jsx";
import './app.scss';
import ErrorMessage from "../errorMessage/errormessage.jsx";
import GotService from "../../services/gotService.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, useParams } from "react-router";
import { BookPage, HousePage, CharacterPage, BooksItem } from "../pages"

const App = () => {
	const [onHide, setOnHide] = useState(false);
	const [error, setError] = useState(false);
	const params = useParams();

	const gotService = new GotService();

	if (error) {
		return <ErrorMessage />
	}
	const randomBlock = onHide ? <></> : <RandChar />;


	return (
		<Router>
			<div className="app">
				<Header />
				<main className="page">
					{randomBlock}
					<div className="page__section">
						<div className="section__container">
							<button
								className="togle__btn"
								onClick={() => setOnHide(!onHide)}>
								Togle
							</button>
						</div>
					</div>
					<Routes>
						<Route path="/" element={<CharacterPage />} />
						<Route path="/characters/" element={<CharacterPage />} />
						<Route path="/houses/" element={<HousePage />} />
						<Route path="/books/" element={<BookPage />} />
						<Route path="/books/:id" element={<BooksItem bookId={params.id} />} />
					</Routes>
					<div className="page__bg">
						<img src="@img/app/got.jpeg" alt="bg"></img>
					</div>
				</main>
			</div>
		</Router>
	)
}

export default App;