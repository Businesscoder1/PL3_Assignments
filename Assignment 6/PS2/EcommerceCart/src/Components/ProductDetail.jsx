// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/products';
import { useCart } from '../Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(prod => prod.id === parseInt(id));
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
