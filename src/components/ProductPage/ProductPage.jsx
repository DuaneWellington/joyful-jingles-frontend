// PATH: 'src/components/ProductPage/ProductPage.jsx'

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductPageHeader from "../Headers/ProductPageHeader";
import "../Styles/ProductPage.css";
import "../App/App.css"

const ProductPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const handleAddToWishlist = () => {
    const currentWishlist = localStorage.getItem("wishlist");
    const wishlistItems = currentWishlist ? JSON.parse(currentWishlist) : [];
    setProductDetails((prevDetails) => {
        wishlistItems.push(prevDetails);
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
        return prevDetails;
    });
  };

  return (
    <div>
      <ProductPageHeader />
      <div className="pp-product-card">
        <img
          src={productDetails.images[1]}
          alt={productDetails.title}
          className="pp-product-image"
        />
        <h1>{productDetails.title}</h1>
        <p>{productDetails.description}</p>
        <p>${productDetails.price}</p>
      </div>
      <button>Add to Wishlist</button>
        <Link to="/all-products">Back</Link>
    </div>
  );
};

export default ProductPage;
