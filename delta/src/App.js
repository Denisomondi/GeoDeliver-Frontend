import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ShoppingCart from './components/shoppingcart';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar.js';
import LoginPage from './components/LoginPage';
import CategoriesPage from './components/CategoriesPage';
import AboutUs from './components/AboutUs';
import SellWithUs from './components/SellWithUs';
import AccountManagement from './components/AccountManagement';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import ProductCard from './components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HistoryComponent from './components/OrderHistory';

// LoadingScreen component
const LoadingScreen = () => {
  return (
    <div className="boxes">
      {/* Loading screen content */}
    </div>
  );
};

function App() {
  const bannerRef = useRef(null);
  const headerRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const [productData, setProductData] = useState([]); // Placeholder for product data
  const [searchResults, setSearchResults] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false); // State variable for controlling search bar visibility

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (isLoggedIn && savedUser) {
      setLoggedIn(true);
      setUser(savedUser);
    }

    // Simulate fetching product data from an API
    fetchProductData(); // Call the function to fetch product data
  }, []);

  const fetchProductData = () => {
    const products = [
      // Sample product data
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 19.99 },
      { id: 3, name: 'Product 3', price: 5.99 },
    ];

    setProductData(products);
  };

  const handleSearch = (data) => {
    console.log('Search results:', data);
    setSearchResults(data);
    setShowSearchBar(false); // Hide the search bar after search
  };

  const handleLogin = (user) => {
    setLoggingIn(true);

    // Asynchronous login process (API call) with a timeout. Loads API while loading login.
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      setLoggedIn(true);
      setUser(user);
      setLoggingIn(false);
    }, 1200);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  const toggleSearchBar = () => {
    setShowSearchBar((prevShowSearchBar) => !prevShowSearchBar); // Toggle the value of showSearchBar
  };

  useEffect(() => {
    const headerTimeout = setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = 0;
        headerRef.current.style.visibility = 'hidden';
      }
    }, 10000);

    return () => clearTimeout(headerTimeout);
  }, []);

  if (loggingIn) {
    return <LoadingScreen />; // Display the loading screen while logging in, so that all the fetch requests in the landing page load.
  }

  if (!loggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <ShoppingCartProvider>
        <Router>
          <Navbar
            onLogout={handleLogout}
            user={user}
            onSearchButtonClick={toggleSearchBar} // Pass the toggleSearchBar function as a prop
          />
          <Header ref={headerRef} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showSearchBar && (
                    <section>
                      <SearchBar onSearch={handleSearch} />
                    </section>
                  )}
                  <Banner ref={bannerRef} />
                  {searchResults ? (
                    // Render search results component if there are search results
                    <SearchResults results={searchResults} onClose={() => setSearchResults(null)} />
                  ) : (
                    // Render landing page component if there are no search results
                    <LandingPage />
                  )}
                </>
              }
            />
            <Route path="/cart" element={<ShoppingCart products={productData} user={user}/>} />
            <Route path="/CategoriesPage" element={<CategoriesPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="History" element={<HistoryComponent user={user}/>} />
            <Route path="/sell" element={<SellWithUs />} />
            <Route path="/Account" element={<AccountManagement loggedIn={loggedIn} user={user} onUpdate={handleLogin} onLogout={handleLogout} />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </div>
  );
}

// SearchResults component to render the search results
const SearchResults = ({ results, onClose }) => {
  return (
    <div className="search-results">
      <div className="search-results-header">
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Search Results
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose}
            className="closeResult"
          />
        </h2>
      </div>
      <div className="product-grid">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
