import React, { useState } from "react";
import GotService from "../../services/gotService.jsx";
import DetalesItem, { Field } from "../detalesItem/detalesItem.jsx";
import { useParams } from "react-router";

const BooksItem = () => {
	const gotService = new GotService();
	const [selectedBook, setSelectedBook] = useState(1);

	// state = {
	// 	selectedBook: 1,
	// }

	return (
		<DetalesItem
			itemId={selectedBook}
			getData={gotService.getBook}
		>
			<Field field='authors' label='Authors' />
			<Field field='country' label='Country' />
			<Field field='numberOfPages' label='NumberOfPages' />
			<Field field='mediaType' label='MediaType' />
		</DetalesItem>
	);

}

export default BooksItem;