// PATH: 'src/components/UserDashboard/WishlistItemForm.jsx'


import React, { useState } from "react";

const WishlistItemForm = ({ onAddItem }) => {
    const [itemDesc, setItemDesc] = useState('');
    const [itemLink, setItemLink] = useState('');

    const handleAddItem = () => {
        if (itemDesc.trim() !== '' && itemLink.trim() !== '') {
            onAddItem({ description: itemDesc, link: itemLink, purchased: false});
            setItemDesc('');
            setItemLink('')
        }
        // const newItem = { itemName, itemLink, purchased: false };
        // onAddItem(newItem);
    };

    return (
        <div>
            <h3>Add Item to Wishlist</h3>
            <input
            type='text'
            placeholder="Enter item description"
            value={itemDesc}
            onChange={(e) => setItemDesc(e.target.value)}/>
            <input
            type="text"
            placeholder="enter item description"
            value={itemDesc}
            onChange={(e) => setItemDesc(e.target.value)}/>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default WishlistItemForm;