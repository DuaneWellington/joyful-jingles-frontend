

import React, { useState } from "react";

const WishlistItemForm = ({ onAddItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemLink, setItemLink] = useState('');

    const handleAddItem = () => {
        const newItem = { itemName, itemLink, purchased: false };
        onAddItem(newItem);
    };

    return (
        <div>
            <h3>Add Item to Wishlist</h3>
            {/* wishlist item form fields */}
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default WishlistItemForm;