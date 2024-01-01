// // PATH: 'src/components/ApiTest.jsx'

// import React, { useState, useEffect } from 'react';
// import UserDashboardHeader from './Headers/UserDashboardHeader';

// const ApiTest = () => {
//     const [data, setData] = useState([]);
//     const [wishlistCreated, setWishlistCreated] = useState(false);
//     const [selectedProductId, setSelectedProductId] = useState(null);
//     const [wishlistName, setWishlistName] = useState('');
//     const [wishlists, setWishlists] = useState([]);
//     const [wishlistNameError, setWishlistNameError] = useState('');
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('https://dummyjson.com/products');
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     const getRandomProducts = (count) => {
//       const shuffledData = data.products ? [...data.products].sort(() => 0.5 - Math.random()) : [];
//       return shuffledData.slice(0, count);
//     };
  
//     const selectedProducts = getRandomProducts(5);
  
//     useEffect(() => {
//       // Retrieve wishlists from localStorage when the component mounts
//       const storedWishlists = JSON.parse(localStorage.getItem('wishlists')) || [];
//       setWishlists(storedWishlists);
//     }, []);
  
//     const handleCardClick = (productId) => {
//       setSelectedProductId(productId);
//       checkWishlistStatus();
//     };
  
//     const checkWishlistStatus = () => {
//       const storedWishlists = JSON.parse(localStorage.getItem('wishlists')) || [];
//       setWishlists(storedWishlists);
  
//       const userWishlists = storedWishlists;
  
//       if (userWishlists.length === 0) {
//         setWishlistCreated(false);
//       } else {
//         setWishlistCreated(true);
//       }
//     };
  
//     const handleCreateWishlist = () => {
//       if (wishlistName.trim() === '') {
//         setWishlistNameError('Please enter a name for your wishlist.');
//       } else {
//         setWishlistCreated(true);
//         addToWishlist();
//       }
//     };
  
//     const handleWishlistSelection = (selectedWishlist) => {
//       console.log(`Selected Wishlist: ${selectedWishlist}`);
//       addToWishlist(selectedWishlist);
//     };
  
//     const addToWishlist = (selectedWishlist) => {
//       // Update wishlists state
//       const updatedWishlists = [...wishlists, { id: Date.now(), name: selectedWishlist || wishlistName }];
//       setWishlists(updatedWishlists);
  
//       // Store wishlists in localStorage
//       localStorage.setItem('wishlists', JSON.stringify(updatedWishlists));
  
//       console.log(`Product ${selectedProductId} added to the wishlist!`);
//     };
  
//     return (
//       <div>
//         <header>
//         <UserDashboardHeader />
//         </header>
//         <h1>API Test</h1>
//         <div className="product-container">
//           {selectedProducts.map((item) => (
//             <div
//               key={item.id}
//               className="product-card"
//               onClick={() => handleCardClick(item.id)}
//             >
//               {item.images && item.images.length >= 2 && (
//                 <img
//                   src={item.images[1]}
//                   alt={item.title}
//                   className="product-image"
//                 />
//               )}
//               <div className="product-info">
//                 <h3>{item.title}</h3>
//                 <p>${item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         {!wishlistCreated && (
//           <div>
//             <p>No wishlist created. Create your first wishlist:</p>
//             <input
//               type="text"
//               placeholder="Enter wishlist name"
//               value={wishlistName}
//               onChange={(e) => setWishlistName(e.target.value)}
//             />
//             <button onClick={handleCreateWishlist}>Create Wishlist</button>
//             {wishlistNameError && <p style={{ color: 'red' }}>{wishlistNameError}</p>}
//           </div>
//         )}
//         {wishlistCreated && (
//           <div>
//             <p>Select a wishlist or create a new one:</p>
//             <select onChange={(e) => setWishlistName(e.target.value)}>
//               <option value="" disabled selected>
//                 Select a Wishlist
//               </option>
//               {wishlists.map((wishlist) => (
//                 <option key={wishlist.id} value={wishlist.name}>
//                   {wishlist.name}
//                 </option>
//               ))}
//             </select>
//             <button onClick={() => handleWishlistSelection(wishlistName)}>
//               Add to Wishlist
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default ApiTest;




// **************** WORKING ITERATION *********************
//
// import React, { useState, useEffect } from 'react';
// import './Styles/ApiTest.css'; // Import a CSS file for styling

// const ApiTest = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const getRandomProducts = (count) => {
//     const shuffledData = data.products ? [...data.products].sort(() => 0.5 - Math.random()) : [];
//     return shuffledData.slice(0, count);
//   };

//   const selectedProducts = getRandomProducts(5);

//   return (
//     <div>
//       <h1>API Test</h1>
//       <div className="product-container">
//         {selectedProducts.map((item) => (
//           <div key={item.id} className="product-card">
//             {item.images && item.images.length >= 2 && (
//               <img
//                 src={item.images[1]} // Display the second image if available
//                 alt={item.title}
//                 className="product-image"
//               />
//             )}
//             <div className="product-info">
//               <h3>{item.title}</h3>
//               <p>${item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ApiTest;
//
// **************** WORKING ITERATION *********************
