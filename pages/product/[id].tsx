import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const API = "/api/avo";

const ProductPage = () => {
	const [product, setProduct] = useState<TProduct>();
	const {
		query: { id },
	} = useRouter();

	useEffect(() => {
		if (id) {
			window
				.fetch(`${API}/${id}`)
				.then((res) => res.json())
				.then((json) => {
					setProduct(json);
				});
		}
	}, [id]);

	return (
		<section>
			<h1>Página producto: {id}</h1>
			<p>{product?.id}</p>
			<img src={product?.image} alt="Avocado" />
			<p>{product?.name}</p>
			<p>{product?.price}</p>
			<p>{product?.sku}</p>
			<p>{product?.attributes?.description}</p>
			<p>{product?.attributes?.hardiness}</p>
			<p>{product?.attributes?.shape}</p>
			<p>{product?.attributes?.taste}</p>
		</section>
	);
};

export default ProductPage;
