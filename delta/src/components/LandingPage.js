import React, { useEffect, useState, useContext } from 'react';
import './LandingPage.css';
import DisplayPage from './DisplayPage';
import { ShoppingCartContext } from './ShoppingCartContext';

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchRecentProducts();
  }, []);

  const fetchRecentProducts = async () => {
    try {
      const response = await fetch('http://localhost:4567/products');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching recent products:', error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // You can add additional logic here if needed
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <section>
        <h2>Most Recent Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <a className="more-details-button" onClick={() => openPopup(product)}>
                More Details
              </a>
            </div>
          ))}
        </div>
      </section>
      {selectedProduct && (
        <DisplayPage product={selectedProduct} addToCart={handleAddToCart} onClose={closePopup} />
      )}
    </div>
  );
};

export default LandingPage;
