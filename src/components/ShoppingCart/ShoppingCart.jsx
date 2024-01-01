// PATH: 'src/components/ShoppingCart/ShoppingCart.jsx'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartHeader from "../Headers/ShoppingCartHeader";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const currentCart = localStorage.getItem("cart");
        const cartData = currentCart ? JSON.parse(currentCart) : [];
        setCartItems(cartData);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

const promptUserToChooseWishlist = async (availableWishlists) => {

  if (availableWishlists.length === 1) {
    return availableWishlists[0];
  }

  const wishlistNames = availableWishlists.map((wishlist) => wishlist.name);
  const selectedWishlistName = prompt("Choose a wishlist:", wishlistNames.join(", "));

  return availableWishlists.find((wishlist) => wishlist.name === selectedWishlistName) || null;
};

  const handleAddToWishlist = async () => {
    const existingWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];

    if (existingWishlists.length === 0) {
      alert("Please create a Wishlist to add your cart item(s) to!");
    } else {
      const selectedWishlist = await promptUserToChooseWishlist(existingWishlists);

      if (selectedWishlist) {
        const updatedWishlist = {
          ...selectedWishlist,
          items: [...selectedWishlist.items, ...cartItems],
        };

        const updatedWishlists = existingWishlists.map(wl =>
          wl.id === selectedWishlist.id ? updatedWishlist : wl
          );

          localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
          setCartItems([]);
        }
      }
    }

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div>
    <header>
        <ShoppingCartHeader />
        </header>
        <div>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="product-container">
          {cartItems.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Shopping cart is empty</p>
      )}
      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <button onClick={handleAddToWishlist}>Add to Wishlist</button>
          <button onClick={handleClearCart}>Empty Cart</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ShoppingCart;
