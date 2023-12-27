

import React from "react";

const ClickableProduct = ({ item }) => {
    const handleAddToCart = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCartItems = [...existingCartItems, item];

        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        console.log(`Added "${item.title}" to the cart.`);
    }

    return (
        <div className="product-card" onClick={handleAddToCart}>
            {item.images && item.images.length >= 2 && (
                <img src={item.images[1]}
                alt={item.title}
                className="product-image"
                />
            )}
            <div className="product-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ClickableProduct;