// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Auth/LogoutButton.jsx'

import { useAuth0 } from "@auth0/auth0-react";
import "../Styles/LogoutButton.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
    className="logout-button"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;