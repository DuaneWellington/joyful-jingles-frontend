// WishlistContext.js

import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);

  const addProductToWishlist = (product) => {
    setWishlistData((prevData) => [...prevData, product]);
  };

  const removeProductFromWishlist = (productId) => {
    setWishlistData((prevData) => prevData.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistData, addProductToWishlist, removeProductFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
