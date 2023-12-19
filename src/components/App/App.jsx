// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/App/App.jsx'

import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginWithRedirect } from "../Auth/LoginButton";
import "./App.css";

const App = () => {

  const handleGetStarted = async () => {
    await loginWithRedirect();
  };

  return (
    <div>
      <h1>Welcome to Joyful Jingles!!</h1>
      <p>Click the button below to get started and access your dashboard.</p>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );

  // return (
  //   <div>
  //     <h1>Welcome to Joyful Jingles!!</h1>
  //     <p>Click the button below to get started and access your dashboard.</p>
  //     <Link to="/auth">
  //       <button style={{ backgroundColor: "blue", color: "white" }} onClick={handleGetStarted}>
  //         Get Started
  //       </button>
  //     </Link>
  //   </div>
  // );
};

export default App;
