// src/components/Filter.jsx
import React, { useState } from 'react';

const Filter = ({ products, setFilteredProducts }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    // Filter products based on the selected category
    const filtered = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products;
    setFilteredProducts(filtered);
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPriceRange(selectedPrice);

    // Filter products based on the selected price range
    let filtered = [];
    switch (selectedPrice) {
      case 'low-to-high':
        filtered = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        filtered = [...products].sort((a, b) => b.price - a.price);
        break;
      default:
        filtered = products;
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className="filter">
      <h3>Filter Products</h3>
      
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      
      <div>
        <label htmlFor="price">Sort by Price:</label>
        <select id="price" value={priceRange} onChange={handlePriceChange}>
          <option value="">Select</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
