import React, { useState } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import ItemList from "../itemList/itemList.jsx";
import SectionBox from "../sectionBox/sectionBox.jsx";
import { useNavigate } from "react-router";

const BookPage = () => {
	const gotService = new GotService();
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	if (error) {
		return <ErrorMessage />
	}

	return (
		<SectionBox>
			<ItemList
				onItemSelected={(itemId) => {
					navigate(`/books/${itemId}`);
				}}
				getData={gotService.getAllBooks}
			/>
		</SectionBox>
	)
};

export default BookPage;