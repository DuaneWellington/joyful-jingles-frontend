// PATH: 'src/components/App/App.jsx'

console.log('App.jsx loaded')

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginButton from "../Auth/LoginButton.jsx";
import UserDashboard from "../UserDashboard/UserDashboard.jsx";
import VideoBackground from "../VideoBackground.jsx";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import UserProfile from "../UserDashboard/UserProfile.jsx";
import UserWishlist from "../UserWishlist/UserWishlist.jsx"
import WishlistForm from "../UserDashboard/WishlistForm.jsx";
import AllProductsPage from "../AllProductsPage/AllProductsPage.jsx";
import ProductPage from "../ProductPage/ProductPage.jsx";
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