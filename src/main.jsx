// PATH: 'src/main.jsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth/Auth0ProviderWithNavigate.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import App from "./components/App/App.jsx";
import { WishlistProvider } from "./components/WishlistContext/WishlistContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
  <Router>
    <Auth0ProviderWithNavigate>
      <WishlistProvider>
      <App />
      </WishlistProvider>
    </Auth0ProviderWithNavigate>
  </Router>
  </ErrorBoundary>
);
