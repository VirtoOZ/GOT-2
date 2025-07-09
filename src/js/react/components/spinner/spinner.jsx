import React from "react";
import "./spinner.scss";
import gif from "@img/spinner/spinner.gif"

export default function Spinner() {
	return (
		<div className="spinner">
			<img src={gif} alt="spinner"></img>
		</div>
	)
}
