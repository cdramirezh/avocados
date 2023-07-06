import React from "react";
import Navbar from "@components/Navbar/Navbar";
import styles from "./layout.module.css";

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navbar />
			{children}
			<footer>This is the footer</footer>
		</div>
	);
};

export default Layout;
