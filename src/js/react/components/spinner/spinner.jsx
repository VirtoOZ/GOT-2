import React from "react";
import "./spinner.scss";
import gif from "./spinner.gif";

function Spinner() {
	return (
		<div className="spinner">
			<img src={gif} alt=""></img>
		</div>
	)
}

export default Spinner;