import React, { Component } from "react";
import GotService from "../../services/gotService.jsx";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../errorMessage/errormessage.jsx";
import DetalesChar, { Field } from "../detalesChar/detalesChar.jsx";
import ItemList from "../itemList/itemList.jsx";
import RowBlock from "../rowBlock/rowBlock.jsx";

export default class CharacterPage extends Component {
	gotService = new GotService();

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		return (
			null
		)
	};
}