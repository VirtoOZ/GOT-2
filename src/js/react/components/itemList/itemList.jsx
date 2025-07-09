import React, { useState, useEffect } from "react";
import Spinner from "../spinner/spinner.jsx";
import "./itemList.scss"

export default function ItemList({ getData, onItemSelected }) {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		getData()
			.then((data) => {
				setItemList(data)
			});
	}, []);

	function renderItemList(arr) {
		return arr.map((item) => {
			const label = item.name;
			const id = +item.id;

			return (
				<li
					key={id}
					className="list-char__item list__item"
					onClick={() => onItemSelected(id)}>
					<span
						className="list-char__label list__label">
						{label}
					</span>
				</li>
			)
		})
	}

	const items = !itemList ? <Spinner /> : renderItemList(itemList);

	return (
		<section className="list-char list-char__section page__section">
			<ul className="list-char__list list">
				{items}
			</ul>
		</section>
	)
}