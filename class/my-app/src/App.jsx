// import logo from "./logo.svg";
import "./App.css";
//define routes
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/private/Dashboard";
import Admin from "./pages/private/Admin";
import SuperAdmin from "./pages/private/SuperAdmin";
import NotFound from "./pages/NotFound";
import PublicRoutes from "./components/layout/PublicRoutes";
import PrivateRoutes from "./components/layout/PrivateRoutes";
import PersistWrapper from "./components/layout/PersistWrapper";
import Todos from "./pages/private/Todos";
import Todo from "./pages/private/Todo";
import NewTodo from "./pages/private/NewTodo";
import Users from "./pages/users/Users";
import User from "./pages/users/User";
function App() {
	return (
		<Routes>
			{/* Public Routes */}
			<Route path="/" element={<PublicRoutes />}>
				<Route index element={<Home />}></Route>
				<Route path="login" element={<Login />}></Route>
				<Route path="register" element={<Register />}></Route>
			</Route>

			<Route element={<PersistWrapper />}>
				{/* Private Routes */}
				<Route element={<PrivateRoutes />}>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/admin" element={<Admin />}></Route>
					<Route path="/super-admin" element={<SuperAdmin />}></Route>

					<Route path="/todos" element={<Outlet />}>
						{/* /todos */}
						<Route index element={<Todos />} />
						{/* /todos/abcdef */}
						<Route path=":todosId" element={<Todo />} />
						{/* /todos/new */}
						<Route path="new" element={<NewTodo />} />
					</Route>
					{/* Nested Routes */}
					<Route path="/users" element={<Outlet />}>
						<Route index element={<Users />} />
						<Route path=":userId" element={<User />} />
					</Route>
					{/* Nested Routes */}
					{/* <Route path="/teams" element={<Outlet />}>
						<Route index element={<Teams />}></Route>
						<Route path=":teamId" element={<Team />}></Route>
						<Route path=":teamId/edit" element={<EditTeam />}></Route>
						<Route path="new" element={<NewTeam />}></Route>
					</Route> */}
				</Route>
			</Route>

			{/* Errors Routes */}
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
		// <div className="App">
		//  <Layout>
		// 	<SplitPane left={<Left />} right={<Right />} />
		// </Layout>
		// </div>
	);
}

export default App;
