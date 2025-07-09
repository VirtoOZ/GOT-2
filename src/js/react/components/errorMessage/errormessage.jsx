import React from "react";
import "./errormessage.scss";

function ErrorMessage() {
	return (
		<>
			<img className="wrong__image" src="img/errorMessage/Daineris-Else.webp" alt="error-img"></img>
			<div className="wrong__text">Something goes wrong...</div>
		</>
	);
}
export default ErrorMessage;