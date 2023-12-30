// PATH: 'src/componenets/ShoppingCart/ShoppingCart.jsx'

import React, { useState, useEffect } from "react";

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

  const cartItemsWithIds = cartItems.map((item, index) => ({
    ...item,
    id: item.id || index,
  }));

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleAddToWishlist = () => {
    const currentWishlist = localStorage.getItem("wishlist");
    const wishlistItems = currentWishlist ? JSON.parse(currentWishlist) : [];
    wishlistItems.push(...cartItems);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    setCartItems([]);
  };

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
      <h1>Shopping Cart</h1>
      {cartItemsWithIds.length > 0 ? (
        <div className="product-container">
          {cartItemsWithIds.map((item) => (
            <div key={item.id} className="product-card">
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
      {cartItemsWithIds.length > 0 && (
        <div>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <button onClick={handleAddToWishlist}>Add to Wishlist</button>
          <button onClick={handleClearCart}>Empty Cart</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
