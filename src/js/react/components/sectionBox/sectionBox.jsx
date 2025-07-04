import React from "react";

const SectionBox = ({ children }) => {
	return (
		<div className="section__box">
			<div className="section__container">
				{children}
			</div>
		</div>
	)
};

export default SectionBox;