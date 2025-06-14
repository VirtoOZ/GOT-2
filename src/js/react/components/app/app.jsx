import React, { Component } from "react";
import Header from "../header/header.jsx";
import RandChar from "../randChar/randChar.jsx";
import './app.scss';
import img from "./got.jpeg";



export default class App extends Component {


	render() {



		return (

			<>
				<Header />
				<main className="page">
					<RandChar />
					<div className="page__bg">
						<img src={img} alt="bg"></img>
					</div>
				</main>
			</>
		)
	}
}