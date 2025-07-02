import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesChar from "../detalesChar/detalesChar.jsx";
import ItemList from "../itemList/itemList.jsx";

export default class CharacterPage extends Component {
	gotService = new GotService();

	state = {
		selectedChar: 130,
		error: false,
	}

	componentDidCatch() {
		this.setState({ error: true });
	}

	onCharSelected = (id) => {
		this.setState({ selectedChar: id })
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const { selectedChar } = this.state;
		return (
			<>
				<ItemList
					onCharSelected={this.onCharSelected}
					getData={this.gotService.getAllCharacters}
					renderItem={(item) => item.name}
				/>
				<DetalesChar charId={selectedChar} />
			</>
		)
	};
}