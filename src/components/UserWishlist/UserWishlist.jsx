// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserWishlist/UserWishlist.jsx'

import React, { useState, useEffect } from "react";
import { useWishlist } from "../WishlistContext/WishlistContext";
import UserWishlistHeader from "../Headers/UserWishlistHeader";

const UserWishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  const { wishlistData, addProductToWishlist, removeProductFromWishlist } = useWishlist();

  useEffect(() => {
    // Retrieve wishlists from localStorage when the component mounts
    const storedWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
    setWishlists(storedWishlists);
  }, []);

  const handleDeleteItem = (wishlistId, itemId) => {
    // Implement logic to delete the item from the wishlist
    console.log(`Delete item ${itemId} from wishlist ${wishlistId}`);
  };

  const handleChangeQuantity = (wishlistId, itemId, newQuantity) => {
    // Implement logic to change the quantity of the item in the wishlist
    console.log(
      `Change quantity of item ${itemId} in wishlist ${wishlistId} to ${newQuantity}`
    );
  };

  const handleMostWantedClick = (wishlistId, itemId) => {
    // Implement logic to add the item to the Most Wanted column
    console.log(`Add item ${itemId} to Most Wanted in wishlist ${wishlistId}`);
  };

  return (
    <div>
      <header>
        <UserWishlistHeader />
      </header>

      <h1>User Wishlist</h1>
      <table>
        <thead>
          <tr>
            <th>Wishlist Name</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Actions</th>
            <th>Most Wanted</th>
          </tr>
        </thead>
        <tbody>
          {wishlists.map((wishlist) => (
            <tr key={wishlist.id}>
              <td>{wishlist.name}</td>
              {/* Replace the following placeholder with actual wishlist items */}
              <td>Item 1</td>
              <td>
                <select
                  defaultValue="1"
                  onChange={(e) =>
                    handleChangeQuantity(wishlist.id, "item1", e.target.value)
                  }
                >
                  {/* You can dynamically generate quantity options based on available quantities */}
                  {Array.from({ length: 20 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                  {/* ... */}
                </select>
              </td>
              <td>
                <button onClick={() => handleDeleteItem(wishlist.id, "item1")}>
                  Delete
                </button>
                <button
                  onClick={() => handleMostWantedClick(wishlist.id, "item1")}
                >
                  ❤️
                </button>
              </td>
              <td>{/* Display Most Wanted items here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserWishlist;
