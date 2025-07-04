import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesItem, { Field } from "../detalesItem/detalesItem.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";
import SectionBox from "../sectionBox/sectionBox.jsx";

export default class HousePage extends Component {
	gotService = new GotService();

	state = {
		selectedHouse: 5,
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
		this.setState({ selectedHouse: id })
	};

	// onSelectData() {
	// 	const { data } = this.props.onData;
	// 	console.log(data);
	// }

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const { selectedHouse } = this.state;

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllHouses}
			// renderItem={(item) => item.name} 
			/>
		);

		const detalesItem = (
			<DetalesItem
				itemId={selectedHouse}
				getData={this.gotService.getHouse}
			>
				<Field field='name' label='Name' />
				<Field field='region' label='Region' />
				<Field field='words' label='Words' />
				<Field field='coatOfArms' label='CoatOfArms' />
			</DetalesItem>
		);

		return (
			<SectionBox>
				<RowBlock left={itemList} right={detalesItem} />
			</SectionBox>
		)
	};
}