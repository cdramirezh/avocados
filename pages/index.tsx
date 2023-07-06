import React, { useEffect, useState } from 'react'

const API = '/api/avo'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch(API)
      .then((res) => res.json())
      .then(({ data }) => setProductList(data))
  }, [])
  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((producto) => (
        <div key={producto.id}>{producto.name}</div>
      ))}
    </div>
  )
}

export default HomePage
