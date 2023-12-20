// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard/WishlistForm.jsx'


import React, { useState } from "react";

const WishlistForm = ({ onCreateWishlist }) => {
    const [wishlistName, setWishlistName] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateWishlist = () => {
        const newWishlist = { wishlistName, description, items: [] };
        onCreateWishlist(newWishlist);
    };

    return (
        <div>
            <h3>Create Wishlist</h3>
            <input
            type="text"
            placeholder="Enter Wishlist Name"
            value={wishlistName}
            onChange={(e) => setWishlistName(e.target.value)}
            />
            <button onClick={handleCreateWishlist}>Create Wishlist</button>
        </div>
    );
};

export default WishlistForm;