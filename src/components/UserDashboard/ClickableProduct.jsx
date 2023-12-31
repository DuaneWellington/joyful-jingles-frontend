// PATH: 'src/components/UserDashboard/ClickableProduct.jsx'

import React from "react";

const ClickableProduct = ({ item, addToCart }) => {
    const handleClick = () => {
        addToCart(item);
    };

    const handleAddToCart = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCartItems = [...existingCartItems, item];

        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        console.log(`Added "${item.title}" to the cart.`);
    }

    return (
        <div className="ud-product-card" onClick={handleClick}>
            {item.images && item.images.length >= 2 && (
                <img src={item.images[1]}
                alt={item.title}
                className="ud-product-image"
                />
            )}
            <div className="ud-product-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ClickableProduct;