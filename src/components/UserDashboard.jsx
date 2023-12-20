// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard.jsx'

import React, { useState } from "react";
import WishlistForm from "./WishlistForm";
import WishlistItemForm from "./WishlistItemForm";
import WishlistShare from "./WishlistShare";
import FriendWishlists from "./FriendWishlists";

const UserDashboard = () => {
    const [wishlists, setWishlists] = useState([]);

    const createWishlist = (newWishlist) => {
        setWishlists([...wishlists, newWishlist]);
    };

    const addItemToWishlist = (wishlistIndex, newItem) => {
        const updatedWishlists = [...wishlists];
        updatedWishlists[wishlistIndex].items.push(newItem);
        setWishlists(updatedWishlists);
    };

    // other functions for marking items as purchased, sharing wishlist, fecthing friend wishlists, etc

    return (
        <div>
            <h2>User Dashboard</h2>
            <WishlistForm onCreateWishlist={createWishlist} />
      {/* Other components if/as needed */}
    </div>
    );
};

export default UserDashboard;