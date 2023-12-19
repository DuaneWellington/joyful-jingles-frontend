// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/App.jsx'

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GoogleOAuth from './components/GoogleOAuth'
import UserDashboard from './components/UserDashboard'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to Joyful Jingles!!</h1>
              <p>Click the button below to get started and access your dashboard.</p>
              <Link to="/google-oauth">
                <button style={{ backgroundColor: 'blue', color: 'white' }}>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/google-oauth" element={<GoogleOAuth />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        {/* Add more routes for different components */}
      </Routes>
    </Router>
  );
};




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="https://i.imgur.com/PQU9qJD.png" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://www.freeiconspng.com/img/33893" target="_blank">
//           <img src="https://www.freeiconspng.com/uploads/christmas-star-png-0.png" className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Joyful Jingles Christmas Wishlist</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   )
// }

export default App

