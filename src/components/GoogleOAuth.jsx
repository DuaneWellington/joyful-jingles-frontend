// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/GoogleOAuth.jsx'

import React from "react"
// import { useGoogleLogin } from "react-oauth";

const GoogleOAuth = () => {
    const { singIn, googleUser } = useGoogleLogin({
        clientId: process.env.CLIENT_ID,
        onSuccess: (user) => {
            console.log("Google user:", user);
        },
        onError: (error) => {
            console.error("Google authentication error", error);
        },
        onLogoutSuccess: () => {
            console.log("User signed out");
        },
    });

    return (
        <div>
        {/* Google OAuth content */}
        <button onClick={signIn}>Sign in with Google</button>
        {googleUser && (
            <div>
                <p>Welcome, {googleUser.profileObj.name}!</p>
                </div>
        )};
        </div>
    );
};

export default GoogleOAuth