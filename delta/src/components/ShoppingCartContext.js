import React, { createContext, useState } from 'react';

// Create the shopping cart context
const ShoppingCartContext = createContext();

// Create a provider component to wrap the components that need access to the shopping cart context
const ShoppingCartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Add a product to the shopping cart
  const addToCart = (product) => {
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
  };

  // Remove a product from the shopping cart
  const removeFromCart = (productId) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== productId)
    );
  };

  // Clear the shopping cart
  const clearCart = () => {
    setSelectedProducts([]);
  };

  // Create the context value object
  const contextValue = {
    selectedProducts,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
