// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/Utilities/api.jsx'

import axios from "axios";

const baseURL = "https://api.walmart.com/v3";

const api = axios.create({
    baseURL
});

// get product information
export const getProductInfo = async (apiKey, productId) => {
  try {
    const response = await api.get(`/product/${productId}`, {
      headers: {
        'X-Api-Key': apiKey,
        // add any other params required by the Walmart API
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching product information', error);
    throw error;
};
};

// delete item from wishlist
export const deleteItemFromWishlist = async (wishlistId, itemId) => {
    try {
        const response = await api.delete(`/wishlist/${wishlistId}/item/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting item from wishlist', error);
    }
};

// delete a friend from friendlist
export const deleteFriend = async (friendId) => {
    try {
      const response = await api.delete(`/friends/${friendId}`);
      // Assuming the API response contains relevant information about the deletion
      return response.data;
    } catch (error) {
      console.error('Error deleting friend', error);
      throw error;
    }
  };

  export default api;