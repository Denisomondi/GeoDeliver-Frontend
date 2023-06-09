import React, { useState } from 'react';
import './SellWithUs.css';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showCategory, setShowCategory] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageFile(file);
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      name,
      price: parseFloat(price),
      image: imageUrl,
      category,
      description
    };

    console.log('Sending product data:', productData);

    try {
      const response = await fetch('http://localhost:4567/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        const product = await response.json();
        console.log('Product created:', product);
      } else {
        console.error('Product creation failed:', response.status);
      }
    } catch (error) {
      console.error('Product creation failed:', error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setShowCategory(false);
  };

  const showCategoryField = () => {
    setShowCategory(true);
  };

  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-item1">
          <img src="https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg" alt="Fashion" />
        </div>
        <div className="banner-item3">
          <img src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1568.jpg" alt="Electronics" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {imageUrl && <img src={imageUrl} alt="Product" style={{ maxWidth: '200px' }} />}
        <br />
        <label>Choose Category:</label>
        {!showCategory && (
          <button className='btn-main' type="button" onClick={showCategoryField}>
            Select Category
          </button>
        )}
        {showCategory && (
          <div className="dropdown">
            <button className="dropdown-button">Category</button>
            <div className="dropdown-content">
              <label>
                <input type="radio" name="category" value="Books" checked={category === 'Books'} onChange={handleCategoryChange} />
                <span>Books</span>
              </label>
              <label>
                <input type="radio" name="category" value="Electronics" checked={category === 'Electronics'} onChange={handleCategoryChange} />
                <span>Electronics</span>
              </label>
              <label>
                <input type="radio" name="category" value="Fashion" checked={category === 'Fashion'} onChange={handleCategoryChange} />
                <span>Fashion</span>
              </label>
              <label>
                <input type="radio" name="category" value="Home & Kitchen" checked={category === 'Home & Kitchen'} onChange={handleCategoryChange} />
                <span>Home & Kitchen</span>
              </label>
              <label>
                <input type="radio" name="category" value="Beauty & Personal Care" checked={category === 'Beauty & Personal Care'} onChange={handleCategoryChange} />
                <span>Beauty & Personal Care</span>
              </label>
              <label>
                <input type="radio" name="category" value="Books & Media" checked={category === 'Books & Media'} onChange={handleCategoryChange} />
                <span>Books & Media</span>
              </label>
              <label>
                <input type="radio" name="category" value="Sports & Fitness" checked={category === 'Sports & Fitness'} onChange={handleCategoryChange} />
                <span>Sports & Fitness</span>
              </label>
              <label>
                <input type="radio" name="category" value="Toys & Games" checked={category === 'Toys & Games'} onChange={handleCategoryChange} />
                <span>Toys & Games</span>
              </label>
              <label>
                <input type="radio" name="category" value="Health & Wellness" checked={category === 'Health & Wellness'} onChange={handleCategoryChange} />
                <span>Health & Wellness</span>
              </label>
              <label>
                <input type="radio" name="category" value="Baby & Kids" checked={category === 'Baby & Kids'} onChange={handleCategoryChange} />
                <span>Baby & Kids</span>
              </label>
              <label>
                <input type="radio" name="category" value="Automotive & Tools" checked={category === 'Automotive & Tools'} onChange={handleCategoryChange} />
                <span>Automotive & Tools</span>
              </label>
              <label>
                <input type="radio" name="category" value="Pet Supplies" checked={category === 'Pet Supplies'} onChange={handleCategoryChange} />
                <span>Pet Supplies</span>
              </label>
              <label>
                <input type="radio" name="category" value="Home Decor" checked={category === 'Home Decor'} onChange={handleCategoryChange} />
                <span>Home Decor</span>
              </label>
              <label>
                <input type="radio" name="category" value="Jewelry & Watches" checked={category === 'Jewelry & Watches'} onChange={handleCategoryChange} />
                <span>Jewelry & Watches</span>
              </label>
              <label>
                <input type="radio" name="category" value="Office Supplies" checked={category === 'Office Supplies'} onChange={handleCategoryChange} />
                <span>Office Supplies</span>
              </label>
              <label>
                <input type="radio" name="category" value="Outdoor & Garden" checked={category === 'Outdoor & Garden'} onChange={handleCategoryChange} />
                <span>Outdoor & Garden</span>
              </label>
            </div>
          </div>
        )}
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </>
  );
};

export default ProductForm;
