// PATH: 'src/components/UserWishlist/UserWishlist.jsx'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WishlistForm from "../UserDashboard/WishlistForm";
import ShoppingCartHeader from "../Headers/ShoppingCartHeader";
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
              item.quantity = newQuantity;
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
            const updatedItems = [...wishlist.items, productDetails];
            return { ...wishlist, items: updatedItems };
          }
          return wishlist;
        });
        setWishlists(updatedWishlists);
        localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
      }
    } catch (error) {
      console.error("Error adding item(s) to wishlist:", error);
    }
  };

  const fetchProductDetails = async (productId) => {
    try {
      const wishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
      const matchingWishlist = wishlists.find((wishlist) =>
        wishlist.items.some((item) => item.id === productId)
      );

      if (matchingWishlist) {
        const matchingProduct = matchingWishlist.items.find(
          (item) => item.id === productId
        );
        if (matchingProduct) {
          return {
            id: matchingProduct.id,
            name: matchingProduct.title,
            price: matchingProduct.price,
            quantity: matchingProduct.quantity || 1,
            mostWanted: matchingProduct.mostWanted || false,
          };
        }
      }
      throw new Error(
        `Product with ID ${productId} not found in any wishlist.`
      );
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
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

  return (
    <div className="wl-user-wishlist-container">
      <header>
        <ShoppingCartHeader />
        <Link to="/all-products" className="wl-view-all-products-button">
        <button>View All Products</button>
      </Link>
      </header>

      <h1>User Wishlist</h1>

      <div className="wl-wishlist-form-container">
        <WishlistForm onCreateWishlist={handleCreateWishlist} />
      </div>

      <div className="wl-product-list">
        {wishlists.map((wishlist) => (
          <div key={`wishlist-${wishlist.id}`} className="wl-product-card">  
            <h3>{wishlist.name}</h3>
            <p>{wishlist.description}</p>
            <button className="wl-delete-button" onClick={() => handleDeleteWishlist(wishlist.id)}>
              Delete Wishlist
            </button>
            {wishlist.items.length === 0 ? (
              <p>No items in this wishlist</p>
            ) : (
              <div>
                {wishlist.items.map((wishlistItem) => (
                  <div
                    key={`wishlistItem-${wishlist.id}-${wishlistItem.id}`}
                    className="wl-wishlist-item"
                  >
                    <img src={wishlistItem.image} alt={wishlistItem.name} />
                    <p>{wishlistItem.title}</p>
                    <p>{wishlistItem.price}</p>
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
                        <option
                          key={`${wishlist.id}-${wishlistItem.id}-quantity-${index + 1}`}
                          value={index + 1}
                        >
                          {index + 1}
                        </option>
                      ))}
                    </select>
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
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWishlist;
