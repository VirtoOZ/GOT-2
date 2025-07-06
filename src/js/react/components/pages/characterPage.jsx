import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesItem, { Field } from "../detalesItem/detalesItem.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";
import SectionBox from "../sectionBox/sectionBox.jsx";

export default class CharacterPage extends Component {
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
				getData={this.gotService.getAllCharacters}
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
			<SectionBox>
				<RowBlock left={itemList} right={detalesItem} />
			</SectionBox>
		)
	};
}