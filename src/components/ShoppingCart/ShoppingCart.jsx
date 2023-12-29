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

        // const fetchCartItems = async () => {
        //     try {
        //         const response = await fetch("https://dummyjson.com/cart");
        //         const cartData = await response.json();
        //         setCartItems(cartData.items || []);
        //     } catch (error) {
        //         console.error("error fetching cart items:", error);
        //     }        
        // };
        // fetchCartItems();
    // }, []);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handleAddToWishlist = () => {
        const currentWishlist = localStorage.getItem("wishlist");
        const wishlistItems = currentWishlist ? JSON.parse(currentWishlist) : [];
        wishlistItems.push(...cartItems);
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
        setCartItems([]);
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="product-container">
                {cartItems.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="product-info">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                    </div>
                ))}
            </div>
            <p>Total Price: ${calculateTotalPrice()}</p>
            <button onClick={handleAddToWishlist}>Add to Wishlist</button>
        </div>
    );
};

export default ShoppingCart;