import axios from "axios";

const apiURL = "https://api.walmart.com/v3";

export const getProductInfo = async (apiKey, productId) => {
  try {
    const response = await axios.get(`${apiUrl}/items/${productId}`, {
      params: {
        apiKey,
        // add any other params required by the Walmart API
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
