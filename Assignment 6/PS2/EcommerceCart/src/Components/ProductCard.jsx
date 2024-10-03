// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css'
const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p >Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <Link to={`/product/${product.id}`} className='details'>View Details</Link>
    </div>
  );
};

export default ProductCard;
