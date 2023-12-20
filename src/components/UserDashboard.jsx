// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard.jsx'

import React, { useState } from "react";
import { Routes, Route } from "react-router";
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

    const deleteItemFromWishlist = (wishlistIndex, itemIndex) => {
        const updatedWishlists = [...wishlists];
        updatedWishlists[wishlistIndex].items.splice(itemIndex, 1);
        setWishlists(updatedWishlists);
    };

    const deleteFriend = (friendIndex) => {
        const updatedFriends = [...friends];
        updatedFriends.splice(friendIndex, 1);
        setFriends(updatedFriends);
    };

    return (
        <div>
            <h2>User Dashboard</h2>
            <WishlistForm onCreateWishlist={createWishlist} />
      {/* Other components if/as needed */}
    </div>
    );
};

export default UserDashboard;