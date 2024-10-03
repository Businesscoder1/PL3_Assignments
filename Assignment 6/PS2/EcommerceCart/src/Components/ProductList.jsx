// src/components/ProductList.jsx
import React from 'react';
import products from '../Data/products';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div>
      <h2 className='bg-gray-400 cursor-pointer'>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
