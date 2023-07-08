import React from "react";
import { GetStaticProps } from "next";

import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";

// si usamos getStaticProps para una página dinámica,
// entonces toca pasarle TODOS los posibles versiones de la página
// la función getStaticPaths obtiene esos paths para que Next genere todas las pages
export const getStaticPaths = async () => {
	const response = await fetch("https://avocados-three.vercel.app/api/avo");
	const { data: productList }: TAPIAvoResponse = await response.json();

	// los paths que devuelve la función deben tener la siguiente estructura
	const paths = productList.map(({ id }) => ({ params: { id } }));

	return {
		paths,
		// incremental static generation
		// anything not specified in paths returns 404
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string;
	const response = await fetch(
		`https://avocados-three.vercel.app/api/avo/${id}`
	);
	const product: TAPIAvoResponse = await response.json();
	return { props: { product } };
};

const ProductPage = ({ product }: { product: TProduct }) => {
	return (
		<Layout>
			{product == null ? null : <ProductSummary product={product} />}
		</Layout>
	);
};

export default ProductPage;
