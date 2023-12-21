// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard/UserProfile.jsx'

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Headers/Header";
import FriendWishlists from "./FriendWishlists";
import WishlistForm from "./WishlistForm";
import WishlistItemForm from "./WishlistItemForm";
import WishlistShare from "./WishlistShare";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;