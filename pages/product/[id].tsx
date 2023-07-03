import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const API = '/api/avo/'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query } = useRouter()

	const {
		id,
		image,
		name,
		price,
		sku,
		// attributes: { description, hardiness, shape, taste },
	} = {...product}

  useEffect(() => {
    window
      .fetch(`API${query.id}`)
      .then((res) => res.json())
      .then((json) => {setProduct(json)})
  }, [])



  return (
    <section>
      <h1>Página producto: {query.id}</h1>
			<p>{id}</p>
    </section>
  )
}

export default ProductPage
