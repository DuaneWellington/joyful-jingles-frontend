// PATH: 'src/components/UserWishlist/UserWishlist.jsx'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WishlistForm from "../UserDashboard/WishlistForm";
import UserWishlistHeader from "../Headers/UserWishlistHeader";
import "../Styles/UserWishlist.css"

const UserWishlist = () => {
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    const storedWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
    setWishlists(storedWishlists);
  }, []);

  const handleDeleteItem = (wishlistId, itemId) => {
    console.log(`Delete item ${itemId} from wishlist ${wishlistId}`);
  };

  const handleChangeQuantity = (wishlistId, itemId, newQuantity) => {
    console.log(
      `Change quantity of item ${itemId} in wishlist ${wishlistId} to ${newQuantity}`
    );
  };

  const handleMostWantedClick = (wishlistId, itemId) => {
    console.log(`Add item ${itemId} to Most Wanted in wishlist ${wishlistId}`);
  };

  const handleCreateWishlist = (newWishlist) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = [...prevWishlists, newWishlist]
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    });
  };

  const handleDeleteWishlist = (wishlistId) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = prevWishlists.filter((wishlist) => wishlist.id !== wishlistId);
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    })
  }

  return (
    <div className="wl-user-wishlist-container">
      <header>
        <UserWishlistHeader />
      </header>

      <h1>User Wishlist</h1>

      <div className="wl-wishlist-form-container">
      <WishlistForm onCreateWishlist={handleCreateWishlist} />
      </div>

      <div className="wl-product-list">
        {wishlists.map((wishlist) => (
          <div key={wishlist.id} className="wl-product-card">
            <h3>{wishlist.name}</h3>
            <p>{wishlist.description}</p>
            <button onClick={() => handleDeleteWishlist(wishlist.id)}>
              Delete Wishlist
            </button>
            </div>
        ))}
      </div>

      <Link to="/all-products" className="wl-view-all-products-button">
        <button>View All Products</button>
      </Link>

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
            <React.Fragment key={wishlist.id}>       
            <tr>
              <td>{wishlist.name}</td>
              {wishlist.items.length === 0 ? (
                <td colSpan="3">No items in this wishlist</td>
              ) : (
              wishlist.items.map((item) => (
                <React.Fragment key={item.id}>       
              <td>{item.name}</td>
              </React.Fragment>
               ))
               )}
              <td>
                <select
                  defaultValue="1"
                  onChange={(e) =>
                    handleChangeQuantity(wishlist.id, "item1", e.target.value)
                  }
                >
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
                <button onClick={() => handleDeleteWishlist(wishlist.id)}>
                  Delete Wishlist
                </button>
              </td>
            </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserWishlist;
