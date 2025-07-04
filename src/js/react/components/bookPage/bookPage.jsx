import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesItem, { Field } from "../detalesItem/detalesItem.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";
import SectionBox from "../sectionBox/sectionBox.jsx";

export default class BookPage extends Component {
	gotService = new GotService();

	state = {
		selectedBook: 5,
		error: false,
	}

	componentDidCatch() {
		this.setState({ error: true });
	}

	onItemSelected = (id) => {
		this.setState({ selectedBook: id })
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const { selectedBook } = this.state;

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllBooks}
			/>
		);

		const detalesItem = (
			<DetalesItem
				itemId={selectedBook}
				getData={this.gotService.getBook}
			>
				<Field field='authors' label='Authors' />
				<Field field='country' label='Country' />
				<Field field='numberOfPages' label='NumberOfPages' />
				<Field field='mediaType' label='MediaType' />
			</DetalesItem>
		);

		return (
			<SectionBox>
				<RowBlock left={itemList} right={detalesItem} />
			</SectionBox>
		)
	};
}