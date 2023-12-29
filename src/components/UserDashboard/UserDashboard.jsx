// PATH: 'src/components/UserDashboard/UserDashboard.jsx'

import React, { useState, useEffect } from "react";
import { useAuth } from "../Auth/Auth0ProviderWithNavigate";
import { Link } from "react-router-dom";
import "../Styles/UserDashboard.css";
import UserDashboardHeader from "../Headers/UserDashboardHeader";
import ClickableProduct from "./ClickableProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const magnifyingGlassIconUrl = "https://i.imgur.com/2Prbjp1.png";

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [data, setData] = useState({products: []});
  const [searchResults, setSearchResults] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (data.products.length === 0) {
      fetchData();
    }
  }, [data]);

  const getRandomProducts = (count) => {
    const dataProducts = data.products || [];
    const numProducts = dataProducts.length;

    if (numProducts === 0) {
      return [];
    }

    const randomIndices = [];
    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * numProducts);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const selectedProducts = randomIndices.map((index) => dataProducts[index]);
    return selectedProducts;
  };

  const selectedProducts = getRandomProducts(3);

  const addToCart = () => {
    const currentCart = localStorage.getItem("cart");
    const cartItems = currentCart ? JSON.parse(currentCart) : [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartCount((prevCount) => prevCount +1);
  };

  const getFirstName = () => {
    if (user && user.given_name) {
      return user.given_name;
    } else if (user && user.name) {
      const names = user.name.split(" ");
      return names[0];
    }
    return "Guest";
  };

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearch = async (keyword) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${keyword}`);
      const searchData = await response.json();
      setData(searchData);
      setSearchResults(searchData.products || []);
      console.log("Search Results:", searchData)
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div>
      <header>
        <UserDashboardHeader />
      </header>
      <div className="dashboard-header">
        <img
          src={magnifyingGlassIconUrl}
          alt="Search"
          className="search-icon"
          onClick={toggleSearchBar}
        />
        <div className="searchAndCart">
        {searchVisible ? (<SearchBar onSearch={handleSearch}/>) : null}

        <ShoppingCartIcon cartCount={cartCount} />
        </div>

        <h1 className="pageTitle">My Dashboard</h1>
        <p>
          Welcome,{" "}
          <Link to="/profile" className="profile-link">
            {getFirstName()}
          </Link>
        </p>
        <div className="product-container">
          <p>{searchResults.length > 0 ? 'Search Results' : 'Hot and Trending'}
          </p>
          {searchResults.length > 0
          ? searchResults.map((item) => (
            <ClickableProduct key={item.id} item={item} addToCart={addToCart} />
            ))
            : selectedProducts.map((item) => (
              <ClickableProduct key={item.id} item={item} />
            ))}
            {/* <div key={item.id} className="product-card">
              {item.images && item.images.length >= 2 && (
                <img
                  src={item.images[1]} // Display the second image if available
                  alt={item.title}
                  className="product-image"
                />
              )}
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const ShoppingCartIcon = ({ cartCount }) => (
  <Link to="/cart" className="shopping-cart-icon">
    <FontAwesomeIcon icon={faShoppingCart} />
    {cartCount > 0 && <div className="cart-count"> {cartCount}</div>}
  </Link>
);

export default UserDashboard;
