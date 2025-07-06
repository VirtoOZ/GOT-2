import React, { useState, useEffect } from "react";
import ErrorMessage from "../errorMessage/errormessage.jsx";

const Field = ({ item, field, label }) => {
	return (
		<li className="detales-char__title list__item">
			<span className="detales-char__label list__label">{label}</span>
			<span className="detales-char__value list__value">{item[field]}</span>
		</li>
	)
};

export { Field };

function DetalesItem({ itemId, getData, children }) {
	const [item, setItem] = useState(itemId);

	if (!itemId) {
		return (
			<section className="detales-char detales-char__section page__section">
				<div className="detales-char__list list">
					<span className="">Please select character</span>
				</div>
			</section>
		)
	};

	function onUpdateItem() {
		// console.log('update');
		if (!itemId) {
			return;
		}
		getData(itemId)
			.then((item) => {
				setItem(item);
			});
	}

	// вместо componentDidMount
	useEffect(() => {
		onUpdateItem();
	}, [itemId]);

	// this.foo.bar = 0;

	// render() {
	return (
		<section className="detales-char detales-char__section page__section" >
			<ul className="detales-char__list list">
				<h2 className="list__title">{item.name}</h2>
				{
					React.Children.map(children, (child) => {
						return React.cloneElement(child, { item })
					})
				}
			</ul>
		</section >
	)
};

export default DetalesItem;