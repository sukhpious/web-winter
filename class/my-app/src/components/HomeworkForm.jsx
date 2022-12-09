import React from "react";

class HomeworkForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			submitted: false,
		};
		this.increaseCount = this.increaseCount.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState((prevState) => ({
			submitted: !prevState.submitted,
		}));
	}

	increaseCount() {
		this.setState((prevState) => ({
			counter: prevState.counter + 1,
		}));
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>{this.state.counter}</h2>
				<button onClick={this.increaseCount} type="button">
					Increment
				</button>

				<h2>{this.state.submitted ? "ON" : "OFF"}</h2>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default HomeworkForm;
