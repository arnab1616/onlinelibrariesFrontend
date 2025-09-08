import React from 'react'
import { useParams } from 'react-router-dom';

export const SingleProduct = () => {
  const { productTitle, id } = useParams();

  return (
    <div>
      <h1>Product: {productTitle}</h1>
      <p>ID: {id}</p>
    </div>
  )
}
