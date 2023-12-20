// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/App/App.jsx'

import React from "react";
import Auth0ProviderWithNavigate from "../Auth/Auth0ProviderWithNavigate";
import LoginButton from "../Auth/LoginButton";
import "./App.css";

const App = () => {

  return (
    <Auth0ProviderWithNavigate>
      <div>
        <h1>Welcome to Joyful Jingles!!</h1>
        <p>Click the button below to get started and access your dashboard.</p>
        <LoginButton />
      </div>
    </Auth0ProviderWithNavigate>
  );
};

export default App;
