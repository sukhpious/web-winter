// import logo from "./logo.svg";
import "./App.css";
//define routes
import { Routes, Route, Outlet } from "react-router-dom";
// import Layout from "./components/Layout";
// import Left from "./components/Left";
// import NameTag from "./components/NameTag";
// import Right from "./components/Right";
// import SplitPane from "./components/SplitPane";
// import HomeworkForm from "./components/HomeworkForm";
// import FormWithInput from "./components/FormWithInput";
// import Clockb from "./components/ClockB";
// import Posts from "./components/Posts";
// import UsersB from "./components/UsersB";
// import SimpleBank from "./components/SimpleBank";
// import { PizzaStore } from "./components/PizzaStore";
// import UsersC from "./components/UsersC";
// import Memo from "./components/Memo";
import Home from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/private/Dashboard";
import Admin from "./pages/private/Admin";
import SuperAdmin from "./pages/private/SuperAdmin";
import NotFound from "./pages/NotFound";
import PublicRoutes from "./components/layout/PublicRoutes";
import PrivateRoutes from "./components/layout/PrivateRoutes";
function App() {
	// const elementName = <NameTag name="Bob" age={15} />;
	return (
		<Routes>
			{/* Public Routes */}
			<Route path="/" element={<PublicRoutes />}>
				<Route index element={<Home />}></Route>
				<Route path="login" element={<Login />}></Route>
				<Route path="register" element={<Register />}></Route>
			</Route>

			{/* Private Routes */}
			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/admin" element={<Admin />}></Route>
				<Route path="/super-admin" element={<SuperAdmin />}></Route>

				{/* Nested Routes */}
				{/* <Route path="/teams" element={<Outlet />}>
					<Route index element={<Teams />}></Route>
					<Route path=":teamId" element={<Team />}></Route>
					<Route path=":teamId/edit" element={<EditTeam />}></Route>
					<Route path="new" element={<NewTeam />}></Route>
				</Route> */}
			</Route>
			{/* Errors Routes */}
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
		// <div className="App">
		//  <Layout>
		// 	<SplitPane left={<Left />} right={<Right />} />
		// </Layout>
		// {/* <HomeworkForm /> */}
		// {/* <FormWithInput /> */}
		// {/* <div>{elementName}</div> */}
		// {/* <header className="App-header"> */}
		// {/* <img src={logo} className="App-logo" alt="logo" /> */}
		// {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
		// 		Learn React
		// 	</a> */}
		// {/* </header> */}
		// {/* <h3>React Hooks</h3> */}
		// {/* <Clockb /> */}
		// <UsersC />
		// <Memo />
		// </div>
	);
}

export default App;
