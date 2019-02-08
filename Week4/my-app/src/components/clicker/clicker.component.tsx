import React from 'react';
import { Button } from 'reactstrap';
import { ClickerDisplayComponent } from './clicker-display/clicker-display';

export class ClickerComponent extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0
		};
	}

	increment = (amount: number) => {
		this.setState({
			clicks: this.state.clicks + amount
		});
	};
	render() {
		const { clicks } = this.state;
		return (
			<div>
				<h2>Clicker Component</h2>
				<ClickerDisplayComponent click={clicks} />
				<Button color="success" onClick={() => this.increment(1)}>
					Increment
				</Button>
				{clicks >= 10 && (
					<Button color="success" onClick={() => this.increment(5)}>
						+5
					</Button>
				)}
			</div>
		);
	}
}
