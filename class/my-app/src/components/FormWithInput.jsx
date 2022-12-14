import React, { Fragment } from "react";

function CustomInput(props) {
	const { name, label, type, state, placeholder, handleChange } = props;
	return (
		<Fragment>
			<label htmlFor={name}>
				{label}:
				<input id={name} type={type} name={name} placeholder={placeholder} value={state[name]} onChange={handleChange} />
			</label>
			<br />
		</Fragment>
	);
}

class FormWithInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
		};

		this.fields = [
			{
				id: "username",
				label: "Username",
				placeholder: "Enter your name",
				type: "text",
			},
			{
				id: "email",
				label: "Email",
				placeholder: "Enter your email",
				type: "email",
			},
			{
				id: "password",
				label: "Password",
				placeholder: "Enter your password",
				type: "password",
			},
		];

		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetFormFields = this.resetFormFields.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		console.log("the information the user has filled in");
		const body = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		};
		// this is undefined
		console.log(body);
		event.preventDefault();
	}

	handleChange(event) {
		// const {name} = event.target
		// const target = event.target;
		// here on an onchange event
		// taking value from three form fields every time
		// one with value and two empty
		// const value = target.value;
		// const name = target.name;
		// const email = target.name;
		// const password = target.name;

		// instead use destructing and get the one where change happen
		const { name, value } = event.target;

		this.setState({
			[name]: value,
			// [email]: value,
			// [password]: value,
		});
	}

	resetFormFields() {
		this.setState({
			username: "",
			email: "",
			password: "",
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Form</h1>

				{this.fields.map(({ id, label, placeholder, type }) => (
					<CustomInput key={id} label={label} placeholder={placeholder} type={type} state={this.state} handleChange={this.handleChange} />
				))}

				{/* <label htmlFor="username">
					Username:
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
				</label>
				<br />
				<label htmlFor="email">
					Email:
					<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
				</label>
				<br />
				<label htmlFor="password">
					Password:
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
				</label> */}
				<br />
				<input type="reset" value="Reset" onClick={this.resetFormFields} />
				<br />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default FormWithInput;
