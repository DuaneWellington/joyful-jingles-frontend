// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/Utilities/api.jsx'

import axios from "axios";

const api = axios.create({
  baseURL: "http://api-prd2.axesso.de/wlm",
  headers: {
    "X-RapidAPI-Key": "52d03659f5mshde22d1aee3d427cp1154eajsn60129072a38e",
    "X-RapidAPI-Host": "http://api-prd2.axesso.de/wlm",
  },
});

// lookup Walmart product by URL
export const lookupProduct = async (productUrl) => {
  try {
    const response = await api.get(`wlm/walmart-lookup-product`, {
      params: { url: productUrl },
    });
    return response.data;
  } catch (error) {
    console.error("Error looing up Walmart Product", error);
    throw error;
  }
};

// search Walmart products by keyword
export const searchByKeyword = async (
  keyword,
  page = 1,
  sortBy = "best_match"
) => {
  try {
    const response = await api.get(`wlm/walmart-search-by-keyword`, {
      params: { keyword, page, sortBy },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching Walmart products by keyword", error);
    throw error;
  }
};

// get product information
export const getProductInfo = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`)
    return response.data;
    } catch (error) {
    console.error("Error fetching product information", error);
    throw error;
  }
};

// delete item from wishlist
export const deleteItemFromWishlist = async (wishlistId, itemId) => {
  try {
    const response = await api.delete(`/wishlist/${wishlistId}/item/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting item from wishlist", error);
    throw error;
  }
};

// delete a friend from friendlist
export const deleteFriend = async (friendId) => {
  try {
    const response = await api.delete(`/friends/${friendId}`);
    // Assuming the API response contains relevant information about the deletion
    return response.data;
  } catch (error) {
    console.error("Error deleting friend", error);
    throw error;
  }
};

export default api;
