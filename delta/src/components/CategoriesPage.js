import React, { useEffect, useState } from 'react';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:4567/products')
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
        setProducts([]);
      })
      .catch((error) => console.error('Error fetching products:', error));
  };

  const fetchProductsByCategory = (category) => {
    fetch('http://localhost:4567/products')
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category === category);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error('Error fetching products by category:', error));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  const getCategoryFirstProductImage = (category) => {
    const categoryProducts = products.filter((product) => product.category === category);
    if (categoryProducts.length > 0) {
      return categoryProducts[0].image;
    }
    return null;
  };

  return (
    <div className="categories-page">
      <h1>Categories Page</h1>
      <div className="category-cards">
        {categories.map((category, index) => {
          const firstProductImage = getCategoryFirstProductImage(category);

          return (
            <div
              key={index}
              className={`category-card ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-image">
                {firstProductImage && <img src={firstProductImage} alt={category} />}
              </div>
              <span>{category}</span>
            </div>
          );
        })}
      </div>
      {selectedCategory && (
        <div className="product-list">
          <h2>Products in {selectedCategory}</h2>
          {products.length > 0 ? (
            <div className="product-cards">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
