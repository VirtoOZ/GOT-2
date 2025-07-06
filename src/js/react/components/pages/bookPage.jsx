import React, { useState, useContext } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesItem, { Field } from "../detalesItem/detalesItem.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";
import SectionBox from "../sectionBox/sectionBox.jsx";
import { useNavigate } from "react-router";

const BookPage = () => {
	const gotService = new GotService();
	// const [selectedBook, setSelectedBook] = useState(2);
	const [error, setError] = useState(false);
	// const [props, setError] = useState(false);
	const navigate = useNavigate();

	// state = {
	// 	// selectedBook: 5,
	// 	error: false,
	// }

	// function componentDidCatch() {
	// 	this.setState({ error: true });
	// }

	// onItemSelected = (id) => {
	// 	this.setState({ selectedBook: id })
	// };

	// render() {
	if (error) {
		return <ErrorMessage />
	}

	// const navigate = useNavigate();
	// const itemList = (
	// 	<ItemList
	// 		onItemSelected={this.onItemSelected}
	// 		getData={this.gotService.getAllBooks}
	// 	/>
	// );

	// const detalesItem = (
	// 	<DetalesItem
	// 		itemId={selectedBook}
	// 		getData={this.gotService.getBook}
	// 	>
	// 		<Field field='authors' label='Authors' />
	// 		<Field field='country' label='Country' />
	// 		<Field field='numberOfPages' label='NumberOfPages' />
	// 		<Field field='mediaType' label='MediaType' />
	// 	</DetalesItem>
	// );

	return (
		// <SectionBox>
		// 	<RowBlock left={itemList} right={detalesItem} />
		// </SectionBox>
		<SectionBox>
			<ItemList
				onItemSelected={(itemId) => {
					navigate(`/books/${itemId}`);
				}}
				getData={gotService.getAllBooks}
			/>
		</SectionBox>
	)
	// };
};
export default BookPage;