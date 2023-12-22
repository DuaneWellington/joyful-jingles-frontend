// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard/UserProfile.jsx'

import { useAuth0 } from "@auth0/auth0-react";
import UserProfileHeader from "../Headers/UserProfileHeader";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <header>
          <UserProfileHeader />
        </header>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;