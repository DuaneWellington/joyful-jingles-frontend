// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/App/App.jsx'

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Auth0ProviderWithNavigate from "../Auth/Auth0ProviderWithNavigate";
import LoginButton from "../Auth/LoginButton";
import "./App.css";
import UserDashboard from "../UserDashboard";

const App = () => {

//   return (
//     <Router>
//       <Auth0ProviderWithNavigate>
//         <div>
//           <h1>Welcome to Joyful Jingles!!</h1>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//               {/* Add more navigation links as needed */}
//             </ul>
//           </nav>
//           <hr />
//           <Route path="/dashboard" element={<UserDashboard />} />
//           {/* Add more routes for other components */}
//         </div>
//       </Auth0ProviderWithNavigate>
//     </Router>
//   );
// };

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
