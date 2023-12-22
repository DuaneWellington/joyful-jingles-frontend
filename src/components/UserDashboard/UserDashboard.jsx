// PATH: 'JOYFUL-JINGLES/express-react/frontend/src/components/UserDashboard/UserDashboard.jsx'

import React, { useState, useEffect } from "react";
import { useAuth } from "../Auth/Auth0ProviderWithNavigate"; // Assuming you have an authentication context or provider
import "../Styles/UserDashboard.css"; // Import a CSS file for styling
import UserDashboardHeader from "../Headers/UserDashboardHeader";

const UserDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getRandomProducts = (count) => {
    const shuffledData = data.products ? [...data.products].sort(() => 0.5 - Math.random()) : [];
    return shuffledData.slice(0, count);
  };

  const selectedProducts = getRandomProducts(5);

  return (
    <div>
        <header>
            <UserDashboardHeader />
        </header>
      <h1 className="pageTitle">My Dashboard</h1>
      <div className="product-container">
        <p>
      <h2>Hot and Trending</h2>
      </p>
        {selectedProducts.map((item) => (
          <div key={item.id} className="product-card">
            {item.images && item.images.length >= 2 && (
              <img
                src={item.images[1]} // Display the second image if available
                alt={item.title}
                className="product-image"
              />
            )}
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { getProductInfo } from "../../utilities/api.jsx";
// import { useAuth } from "../Auth/Auth0ProviderWithNavigate.jsx"; // Assuming you have an authentication context or provider

// const UserDashboard = () => {
//   const [productInfo, setProductInfo] = useState(null);
//   const { isAuthenticated, user } = useAuth(); // Assuming you have an authentication context or provider

//   //   useEffect(() => {
//   // Use a placeholder product ID for testing
//   // const productId = '127WMICR2JLK';

//   // Fetch product information when the component mounts
//   const fetchProductInfo = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5174/walmart-product/127WMICR2JLK"
//       );
//       setProductInfo(response.data);

//       // const result = await getProductInfo(productId);

//       // Set the product information in state
//       // setProductInfo(result);
//     } catch (error) {
//       console.error("Error fetching product information", error);
//     }
//   };

//   useEffect(() => {
//     fetchAmazonProduct();
//   }, []);

//   // export const fetchAmazonProduct = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         'http://api-prd.axesso.de/amz/amazon-lookup-product',
//   //         {
//   //           headers: {
//   //             'axesso-api-key': "52d03659f5mshde22d1aee3d427cp1154eajsn60129072a38e",
//   //             'Content-Type': 'application/json',
//   //           },
//   //           params: {
//   //             url: 'https://www.amazon.com/dp/B01MQNPOUF', // Replace with the actual product URL
//   //           },
//   //         }
//   //       );

//   //       // Handle the response and update state or perform other actions
//   //       console.log(response.data); // Log the response for now
//   //     } catch (error) {
//   //       // Handle errors, e.g., show an error message to the user
//   //       console.error('Error fetching Amazon product:', error);
//   //     }
//   //   };

//   // Call the function to fetch the Amazon product when your component mounts or based on user interactions

//   useEffect(() => {
//     fetchProductInfo();
//   }, []); // Only run this effect once when the component mounts

//   return (
//     <div>
//       <h2 className="userdash">User Dashboard</h2>
//       {isAuthenticated ? (
//         <div>
//           {productInfo ? (
//             <div className="productCard">
//               <img
//                 src={productInfo.productImage}
//                 alt={productInfo.productTitle}
//               />
//               <p>{productInfo.productTitle}</p>
//               <p>${productInfo.price}</p>
//             </div>
//           ) : (
//             <p>Loading product information...</p>
//           )}
//         </div>
//       ) : (
//         <p>Please log in to view your dashboard.</p>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;
