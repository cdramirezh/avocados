import React from "react";
import Navbar from "@components/Navbar/Navbar";

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<footer>This is the footer</footer>
		</>
	);
};

export default Layout;
