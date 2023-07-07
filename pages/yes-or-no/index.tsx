import Link from "next/link";
import Layout from "@components/Layout/Layout";
import styles from "./yes-or-no.module.css";
import { useState } from "react";

export const getServerSideProps = async () => {
	var random_boolean = Math.random() < 0.5;
	return { props: { value: random_boolean } };
};

const YesOrNo = ({ value }) => {

	const [message, setMessage] = useState(value ? "YES" : "NO")
	
	const refreshValue = () => {
		const new_val = (Math.random() < 0.5) ? "YES" : "NO"
		setMessage(new_val);
	}

	return (
		<Layout>
			<span className={styles.value}>{message}</span>
			<button className={styles.try_again} onClick={refreshValue}>Intentar de nuevo</button>
			<Link href="/" className={styles.back_home}>
				Volver al inicio
			</Link>
		</Layout>
	);
};

export default YesOrNo;
