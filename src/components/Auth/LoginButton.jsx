// PATH: 'src/components/Auth/LoginButton.jsx'

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: isAuthenticated ? "/dashboard" : "/",
      },
    });
  };

  return (
    <button 
        className="login-button" 
        onClick={handleLogin}>
        Get Started
    </button>
  );
};

export default LoginButton;
