// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Auth/LoginButton.jsx'

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/dashboard",
            },
        });
    };

    return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
