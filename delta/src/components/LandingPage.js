import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <section>
        <h2>Most Recent Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://picsum.photos/id/1/200/200" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$9.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor metus vel enim finibus lacinia.</p>
          </div>
          <div className="product-card">
            <img src="https://picsum.photos/id/2/200/200" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$14.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor metus vel enim finibus lacinia.</p>
          </div>
          <div className="product-card">
            <img src="https://picsum.photos/id/3/200/200" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$19.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor metus vel enim finibus lacinia.</p>
          </div>
          <div className="product-card">
            <img src="https://picsum.photos/id/1/200/200" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$9.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor metus vel enim finibus lacinia.</p>
          </div>
          <div className="product-card">
            <img src="https://picsum.photos/id/2/200/200" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$14.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor metus vel enim finibus lacinia.</p>
          </div>
          <div className="product-card">
            <img src="https://picsum.photos/id/3/200/200" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$19.99</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor metus vel enim finibus lacinia.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
