import React from 'react';
import { Button } from 'reactstrap';

interface IClickerDisplayProps {
	clicks: number;
}
export class ClickerDisplayComponent extends React.Component<IClickerDisplayProps, any> {
	constructor(props) {
		super(props);
	}

	render() {
		const { clicks } = this.state;
		return (
			<div>
				<p className={clicks % 5 === 0 ? 'clicker-display-5' : ''}>Clicks: {this.state.clicks}</p>
			</div>
		);
	}
}
