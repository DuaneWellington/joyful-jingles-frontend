// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard/UserProfile.jsx'

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfileHeader from "../Headers/UserProfileHeader";
import "../Styles/UserProfile.css"

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <header>
        <UserProfileHeader />
      </header>
    <div className="user-profile-container">
      {isAuthenticated && (
        <div className="user-profile-card">
          <img className="profile-image" src={user.picture} alt={user.name} />
          <div className="profile-info">
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
