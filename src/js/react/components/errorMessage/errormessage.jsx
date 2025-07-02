import React from "react";
import Img from "./Daineris-Else.jpg";
import "./errormessage.scss";

function ErrorMessage() {
	return (
		<>
			<img className="wrong__image" src={Img} alt=""></img>
			<div className="wrong__text">Something goes wrong...</div>
		</>
	);
}
export default ErrorMessage;