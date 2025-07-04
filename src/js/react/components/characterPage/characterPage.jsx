import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesItem, { Field } from "../detalesItem/detalesItem.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";

export default class CharacterPage extends Component {
	gotService = new GotService();

	state = {
		selectedChar: 130,
		error: false,
		// onCharacter: null,
		// onBook: null,
		// onHouse: null,
	}

	// componentDidMount() {
	// 	this.onSelectData();
	// }

	componentDidCatch() {
		this.setState({ error: true });
	}

	onItemSelected = (id) => {
		this.setState({ selectedChar: id })
	};

	// onSelectData() {
	// 	const { data } = this.props.onData;
	// 	console.log(data);
	// }

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const { selectedChar } = this.state;

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllCharacters}
			// renderItem={(item) => item.name} 
			/>
		);

		const detalesItem = (
			<DetalesItem
				itemId={selectedChar}
				getData={this.gotService.getCharacter}
			>
				<Field field='gender' label='Gender' />
				<Field field='born' label='Born' />
				<Field field='died' label='Died' />
				<Field field='culture' label='Culture' />
			</DetalesItem>
		);

		return (
			<RowBlock left={itemList} right={detalesItem} />
		)
	};
}