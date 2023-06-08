import React, { useEffect, useState } from 'react';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the productId from your API
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading state while fetching the product details
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <h3>Reviews</h3>
      {product.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.rating} stars</p>
          <p>{review.comment}</p>
        </div>
      ))}

      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
