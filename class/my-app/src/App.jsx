// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Left from "./components/Left";
import NameTag from "./components/NameTag";
import Right from "./components/Right";
import SplitPane from "./components/SplitPane";
import HomeworkForm from "./components/HomeworkForm";
import FormWithInput from "./components/FormWithInput";
import Clockb from "./components/ClockB";
import Posts from "./components/Posts";
import UsersB from "./components/UsersB";
import SimpleBank from "./components/SimpleBank";
import { PizzaStore } from "./components/PizzaStore";
import UsersC from "./components/UsersC";

function App() {
	const elementName = <NameTag name="Bob" age={15} />;
	return (
		<div className="App">
			{/* <Layout>
				<SplitPane left={<Left />} right={<Right />} />
			</Layout> */}
			{/* <HomeworkForm /> */}
			{/* <FormWithInput /> */}
			{/* <div>{elementName}</div> */}
			{/* <header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			{/* </header> */}
			{/* <h3>React Hooks</h3> */}
			{/* <Clockb /> */}
			<UsersC />
		</div>
	);
}

export default App;
