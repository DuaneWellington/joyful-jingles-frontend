// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/main.jsx'

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth/Auth0ProviderWithNavigate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </Router>
);
