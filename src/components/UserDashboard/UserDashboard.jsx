// PATH: 'src/components/UserDashboard/UserDashboard.jsx'

import React, { useState, useEffect } from "react";
import { useAuth } from "../Auth/Auth0ProviderWithNavigate";
import { Link } from "react-router-dom";
import "../Styles/UserDashboard.css";
// import UserDashboardHeader from "../Headers/UserDashboardHeader";
import ShoppingCartHeader from "../Headers/ShoppingCartHeader";
import ClickableProduct from "./ClickableProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const magnifyingGlassIconUrl = "https://i.imgur.com/2Prbjp1.png";

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [data, setData] = useState({ products: [] });
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

  const addToCart = (item) => {
    const currentCart = localStorage.getItem("cart");
    const cartItems = currentCart ? JSON.parse(currentCart) : [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartCount((prevCount) => prevCount + 1);
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
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${keyword}`
      );
      const searchData = await response.json();
      setData(searchData);
      setSearchResults(searchData.products || []);
      console.log("Search Results:", searchData);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };

  return (
    <div>
      <header>
        <ShoppingCartHeader />
      </header>
      <div className="ud-dashboard-header">
        <img
          src={magnifyingGlassIconUrl}
          alt="Search"
          className="ud-search-icon"
          onClick={toggleSearchBar}
        />
        <div className="ud-searchAndCart">
          {searchVisible ? <SearchBar onSearch={handleSearch} /> : null}

          <ShoppingCartIcon cartCount={cartCount} />
        </div>

        <h1 className="ud-pageTitle">My Dashboard</h1>
        <p>
          Welcome,{" "}
          <Link to="/profile" className="ud-profile-link">
            {getFirstName()}
          </Link>
        </p>
        <div className="ud-hot-trending">
          <p>Hot and Trending</p>
        </div>
        <div className="ud-product-container">
          {searchResults.length > 0
            ? searchResults.map((item) => (
                <ClickableProduct
                  key={item.id}
                  item={item}
                  addToCart={() => addToCart(item)}
                />
              ))
            : selectedProducts.map((item) => (
                <React.Fragment key={item.id}>
                  <ClickableProduct
                    item={item}
                    addToCart={() => addToCart(item)}
                  />
                </React.Fragment>
              ))}
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
    <div className="ud-search-bar">
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
  <Link to="/cart" className="ud-shopping-cart-icon">
    <FontAwesomeIcon icon={faShoppingCart} />
    {cartCount > 0 && <div className="ud-cart-count"> {cartCount}</div>}
  </Link>
);

export default UserDashboard;
