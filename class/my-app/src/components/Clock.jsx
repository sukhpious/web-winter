// Section 1

// Part 1
// const root = ReactDOM.createRoot(document.getElementById("root"));
//simple js function
/* // Part 2
function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	root.render(element);
}
*/

// Part 3
// setInterval(tick, 1000);

// Section 2
/* ----------- make it resusable ------------- */

// To make resuable - functional component
/*
function Clock(props) {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
}

 */
// function tick() {
// 	root.render(<Clock date={new Date()} />);
// }

// Section 3
/* -----------hide the implementation details ------------- */
/* -----------converting to class component ------------- */

/*
class Clock extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
*/

// Section 3
/* -----------add local state and update state ------------- */
/* -----------add lifecycle methods ------------- */

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
// this component can be exported and there will be only one root element.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Clock />);
