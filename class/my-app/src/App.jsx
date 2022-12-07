// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Left from "./components/Left";
import NameTag from "./components/NameTag";
import Right from "./components/Right";
import SplitPane from "./components/SplitPane";

function App() {
	const elementName = <NameTag name="Bob" age={15} />;
	return (
		<div className="App">
			<Layout>
				<SplitPane left={<Left />} right={<Right />} />
			</Layout>

			<div>{elementName}</div>
			{/* <header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}

			{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			{/* </header> */}
		</div>
	);
}

export default App;
