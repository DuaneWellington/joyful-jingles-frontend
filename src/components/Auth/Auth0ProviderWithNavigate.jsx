// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/Auth/Auth0ProviderWithNavigate.jsx'

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import config from "../../config";

const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();

    const domain = config.AUTH0_DOMAIN;
    const clientId = config.AUTH0_CLIENT_ID;
    const redirectUri = "http://localhost:5173/";

    if(!(domain && clientId && redirectUri)) {
        return null;
    }

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
        // navigate(appState?.returnTo || '/');
    };

    return (
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirect_uri={redirectUri}
        authorizationParams={{ redirect_uri: redirectUri }}
        onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate