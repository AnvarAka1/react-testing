import React, { Component } from "react";

export class Headline extends Component {
	render() {
		const { header, desc } = this.props;
		if (!header) {
			return null;
		}
		return (
			<div data-test="HeadlineComponent">
				<h1 data-test="header">{header}</h1>
				<p data-test="descWrapper">{desc}</p>
			</div>
		);
	}
}

export default Headline;
