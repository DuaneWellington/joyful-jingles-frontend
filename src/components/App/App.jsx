// PATH: 'src/components/App/App.jsx'

console.log('App.jsx loaded')

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginButton from "../Auth/LoginButton";
import UserDashboard from "../UserDashboard/UserDashboard";
import VideoBackground from "../VideoBackground";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import UserProfile from "../UserDashboard/UserProfile";
import UserWishlist from "../UserWishlist/UserWishlist"
import WishlistForm from "../UserDashboard/WishlistForm";
import AllProductsPage from "../AllProductsPage/AllProductsPage";
import ProductPage from "../ProductPage/ProductPage";
import "./App.css";

const App = () => {
console.log('within App constant declaration')
  return (
    console.log('inside return for App function'),
    <div className="app-container">
      <VideoBackground />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="app-name">Wishology</h1>
              <div className="hero-section">
                <p>
                  Explore a world of endless possibilities and get what you
                  wished for!
                </p>
                  <LoginButton />
              </div>
              <footer>
                <p className="footer-text">Wishology</p>
              </footer>
            </div>
          }
        />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/wishlist" element={<UserWishlist />} />
        <Route path="/create-wishlist" element={<WishlistForm />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;

console.log('End of App.jsx')