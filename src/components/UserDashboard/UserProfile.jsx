// PATH: 'src/components/UserDashboard/UserProfile.jsx'

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartHeader from "../Headers/ShoppingCartHeader";
import "../Styles/UserProfile.css"

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <header>
        <ShoppingCartHeader />
      </header>
    <div className="up-user-profile-container">
      {isAuthenticated && (
        <div className="up-user-profile-card">
          <img className="up-profile-image" src={user.picture} alt={user.name} />
          <div className="up-profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default UserProfile;
