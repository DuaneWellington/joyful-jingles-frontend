// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard/FriendWishlists.jsx'


import React, { useEffect, useState } from "react";
import { getProductInfo } from "../../utilities/api";

const FriendWishlists = () => {
  const [friendWishlists, setFriendWishlists] = useState([]);

  useEffect(() => {
    const friendIds = ["friend1", "friend2", "friend3"];

    const fetchFriendWishlists = async () => {
      try {
        const apiKey = import.meta.env.VITE_WALMART_API_KEY;

        const wishlistPromises = friendIds.map(async (friendId) => {
          const productId = "productId";

          const wishlistData = await getProductInfo(apiKey, productId);
          return { friendId, wishlistData };
        });

        const wishlists = await Promise.all(wishlistPromises);

        setFriendWishlists(wishlists);
      } catch (error) {
        console.error("Error fetching friend wishlists", error);
      }
    };

    fetchFriendWishlists();
  }, []);

  //implementation for fetching and displaying friend wishlists
  return (
    <div>
      <h3>Friend Wishlists</h3>
      <ul>
        {FriendWishlists.map(({ friendId, wishlistData }) => (
          <li key={friendId}>
            <p>Friend ID: {friendId}</p>
            {/* display wishlistData or extract relevant info */}
            {/* Example: <p>Product Name: (wishlistData.name})</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendWishlists;
