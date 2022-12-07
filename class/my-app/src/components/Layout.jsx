import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div>
			{/* That the component we have imported */}
			{/* Navbar */}
			<Navbar />

			{/* Split Pane component => will pass in left & right side component into split pane */}
			{children}
		</div>
	);
};

export default Layout;
