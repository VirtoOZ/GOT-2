import React, { Component } from "react";
import "./randChar.scss";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";

export default class RandChar extends Component {

	state = {
		data: {},
		loading: true,
		error: false,
		id: null,
	}

	gotService = new GotService();

	componentDidMount() {
		this.updateCharacter();
		// this.timerId = setInterval(this.updateCharacter, 4000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	updateCharacter = () => {
		// console.log('update');
		const id = Math.floor(Math.random() * 140 + 25); //25-140
		this.gotService.getCharacter(id)
			.then(this.updateData)
			.catch(this.onError);

	}

	updateData = (data) => {
		this.setState({
			data,
			loading: false,
			id: data.id
		});
	}

	// class filds современная запись(без бинд)
	// updateData = (data) => {
	// 	this.setState({ data });
	// 	console.log(this.state);
	// }

	onError = (err) => {
		this.setState({
			loading: false,
			error: true,
		});
	}

	render() {
		const { data, loading, error, id } = this.state;
		const content = !(loading || error) ? <View data={data} id={id} /> : null;
		const spinner = loading ? <Spinner /> : null;
		const errorMessage = error ? <ErrorMessage /> : null;
		return (
			<section className="random-char random-char__section page__section">
				<div className="random-char__container">
					<ul className="random-char__list list">
						{errorMessage}
						{spinner}
						{content}
					</ul>
				</div>
			</section>
		)
	}
}

const View = ({ data, id },) => {
	const { name, gender, born, died, culture } = data;
	return (
		<>
			<li className="random-char__title list__title">
				<span className="random-char__label list__label">Random Character: </span>
				<span className="random-char__value list__value">{name} (id:{id})</span>
			</li>
			<li className="random-char__item list__item">
				<span className="random-char__label list__label">Gender</span>
				<span className="random-char__value list__value">{gender}</span>
			</li>
			<li className="random-char__item list__item">
				<span className="random-char__label list__label">Born</span>
				<span className="random-char__value list__value">{born}</span>
			</li>
			<li className="random-char__item list__item">
				<span className="random-char__label list__label">Died</span>
				<span className="random-char__value list__value">{died}</span>
			</li>
			<li className="random-char__item list__item">
				<span className="random-char__label list__label">Culture</span>
				<span className="random-char__value list__value">{culture}</span>
			</li>
		</>
	)
};