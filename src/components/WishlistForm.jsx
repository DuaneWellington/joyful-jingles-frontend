

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
            {/* wishlist form fields */}
            <button onClick={handleCreateWishlist}>Create Wishlist</button>
        </div>
    );
};

export default WishlistForm;