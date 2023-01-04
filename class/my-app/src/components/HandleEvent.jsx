function Form() {
	function handleSubmit(e) {
		e.preventDefault();
		console.log("you clicked the button");
	}
	return (
		<form onSubmit={handleSubmit}>
			<button type="submit">Submit</button>
		</form>
	);
}

class HandleEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => {
			isToggleOn = !prevState.isToggleOn;
		});
	}
	render() {
		return (
			<button type="button" onClick={this.handleClick}>
				{this.state.isToggleOn ? "ON" : "OFF"}
			</button>
		);
	}
}
