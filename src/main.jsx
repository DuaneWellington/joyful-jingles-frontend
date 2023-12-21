// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/main.jsx'

import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";

import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth/Auth0ProviderWithNavigate.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
  <Router>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </Router>
  </ErrorBoundary>
);
