import React from "react";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";

export const getStaticProps = async () => {

	const response = await fetch("https://avocados-three.vercel.app/api/avo")
	const { data } = await response.json()
	const productList = data

	return {
		props: { productList },
	};
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
	return (
		<Layout>
			<KawaiiHeader />
			<ProductList products={productList} />
		</Layout>
	);
};

export default HomePage;
