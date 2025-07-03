import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesChar, { Field } from "../detalesChar/detalesChar.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";

export default class BookPage extends Component {
	gotService = new GotService();

	state = {
		selectedChar: 130,
		error: false,
	}

	componentDidCatch() {
		this.setState({ error: true });
	}

	onItemSelected = (id) => {
		this.setState({ selectedChar: id })
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const { selectedChar } = this.state;

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllBooks}
				renderItem={(item) => item.name} />
		);

		const detalesChar = (
			<DetalesChar charId={selectedChar} >
				<Field field='gender' label='Gender' />
				<Field field='born' label='Born' />
				<Field field='died' label='Died' />
				<Field field='culture' label='Culture' />
			</DetalesChar>
		);

		return (
			<RowBlock left={itemList} right={detalesChar} />
		)
	};
}