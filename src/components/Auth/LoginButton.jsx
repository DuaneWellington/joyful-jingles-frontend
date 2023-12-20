// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Auth/LoginButton.jsx'

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/dashboard",
            },
        });
    };

    return (
        <button 
            onClick={handleLogin}
            style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                fontSize: "16px",
                cursor: "pointer",
            }}
        >
            Get Started
        </button>
    );
};

export default LoginButton;
