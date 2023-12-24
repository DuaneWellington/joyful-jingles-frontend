// PATH: 'src/components/UserDashboard/UserDashboard.jsx'

import React, { useState, useEffect } from "react";
import { useAuth } from "../Auth/Auth0ProviderWithNavigate"; 
import { Link } from "react-router-dom";
import "../Styles/UserDashboard.css"; 
import UserDashboardHeader from "../Headers/UserDashboardHeader";

const UserDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (data.length === 0) {
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

  const getFirstName = () => {
    if (user && user.given_name) {
      return user.given_name;
    } else if (user && user.name) {
      const names = user.name.split(" ");
      return names[0];
    }
    return "Guest";
  };

  return (
    <div>
        <header>
            <UserDashboardHeader />
        </header>
      <h1 className="pageTitle">My Dashboard</h1>
      <p>Welcome, {" "}
      <Link to="/profile" className="profile-link">
        {getFirstName()}
        </Link>
        </p>
      <div className="product-container">
        <p>Hot and Trending</p>
        <p> </p>
        {selectedProducts.map((item) => (
          <div key={item.id} className="product-card">
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
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;


