import React, { Component } from "react";
import './header.scss';

export default class Header extends Component {
	state = {
		onData: null,
	};
	render() {

		return (
			<header className="header">
				<div className="header__wrapper">
					<div className="header__container">
						<div className="header__body">
							<div className="header__name">Game of Thrones DB</div>
							<div className="header__menu menu">
								<button type="button" className="menu__icon icon-menu">
									<span></span>
								</button>
								<nav className="menu__body">
									<ul className="menu__list">
										<li className="menu__item">
											<a href=""
												className="menu__link"
												onClick={() => this.setState}>Characters</a>
										</li>
										<li className="menu__item"><a href="" className="menu__link">Houses</a></li>
										<li className="menu__item"><a href="" className="menu__link">Books</a></li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="header__icon icon-menu">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		)
	}
}