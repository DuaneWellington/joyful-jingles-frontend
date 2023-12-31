// PATH: 'src/components/UserWishlist/UserWishlist.jsx'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WishlistForm from "../UserDashboard/WishlistForm";
import UserWishlistHeader from "../Headers/UserWishlistHeader";
import "../Styles/UserWishlist.css";

const UserWishlist = () => {
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    const storedWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
    setWishlists(storedWishlists);
  }, []);

  const handleDeleteItem = (wishlistId, itemId) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = prevWishlists.map((wishlist) => {
        if (wishlist.id === wishlistId) {
          wishlist.items = wishlist.items.filter((item) => item.id !== itemId);
        }
        return wishlist;
      });
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    });
  };

  const handleChangeQuantity = (wishlistId, itemId, newQuantity) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = prevWishlists.map((wishlist) => {
        if (wishlist.id === wishlistId) {
          wishlist.items = wishlist.items.map((item) => {
            if (item.id === itemId) {
              item.newQuantity = newQuantity;
            }
            return item;
          });
        }
        return wishlist;
      });
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    });
  };

  const handleMostWantedClick = (wishlistId, itemId) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = prevWishlists.map((wishlist) => {
        if (wishlist.id === wishlistId) {
          wishlist.items = wishlist.items.map((item) => {
            if (item.id === itemId) {
              item.mostWanted = !item.mostWanted;
            }
            return item;
          });
        }
        return wishlist;
      });
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    });
  };

  const handleCreateWishlist = (newWishlist) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = [...prevWishlists, newWishlist];
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    });
  };

  const handleDeleteWishlist = (wishlistId) => {
    setWishlists((prevWishlists) => {
      const updatedWishlists = prevWishlists.filter(
        (wishlist) => wishlist.id !== wishlistId
      );
      localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      return updatedWishlists;
    });
  };

  const handleAddItemToWishlist = async (productId) => {
    try {
      const productDetails = await fetchProductDetails(productId);
      const selectedWishlist = await promptUserToChooseWishlist(wishlists);

      if (selectedWishlist) {
        const updatedWishlists = wishlists.map((wishlist) => {
          if (wishlist.id === selectedWishlist.id) {
            wishlist.items.push(productDetails);
          }
          return wishlist;
        });

        localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      }
    } catch (error) {
      console.error("Error adding item(s) to wishlist:", error);
    }
  };

  //     setWishlists((prevWishlists) => {
  //       const updatedWishlists = prevWishlists.map((wishlist) => {
  //         if (wishlist.id === selectedWishlist.id) {
  //           wishlist.items.push(productDetails);
  //         }
  //         return wishlist;
  //       });
  //       localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
  //       return updatedWishlists;
  //     });
  //   } catch (error) {
  //     console.error("Error adding item to wishlist:", error);
  //   }
  // };

  const fetchProductDetails = async (productId) => {
    return {
      id: productId,
      name: "Dummy Product",
      price: 20.99,
      quantity: 1,
      mostWanted: false,
    };
  };

  const promptUserToChooseWishlist = async (availableWishlists) => {
    if (availableWishlists.length === 1) {
      return availableWishlists[0];
    }

    const wishlistNames = availableWishlists.map((wishlist) => wishlist.name);
    const selectedWishlistName = prompt(
      "Choose a wishlist:",
      wishlistNames.join(", ")
    );

    return (
      availableWishlists.find(
        (wishlist) => wishlist.name === selectedWishlistName
      ) || null
    );
  };

  // return wishlists.length > 0 ? wishlists[0] : null;
  // };

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
              </tr>
              {wishlist.items.length === 0 ? (
                <tr>
                  <td colSpan="3">No items in this wishlist</td>
                </tr>
              ) : (
                wishlist.items.map((wishlistItem) => (
                  <React.Fragment key={wishlistItem.id}>
                    <tr>
                      <td>{wishlistItem.name}</td>
                      <td>
                        <select
                          value={wishlistItem.quantity}
                          onChange={(e) =>
                            handleChangeQuantity(
                              wishlist.id,
                              wishlistItem.id,
                              e.target.value
                            )
                          }
                        >
                          {Array.from({ length: 20 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            handleDeleteItem(wishlist.id, wishlistItem.id)
                          }
                        >
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            handleMostWantedClick(wishlist.id, wishlistItem.id)
                          }
                        >
                          {wishlistItem.mostWanted
                            ? "Remove Most Wanted"
                            : "Add Most Wanted"}
                          ❤️
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <button
                          onClick={() => handleDeleteWishlist(wishlist.id)}
                        >
                          Delete Wishlist
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserWishlist;
