// PATH: 'src/components/AllProductsPage/AllProductsPage.jsx'

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AllProductsPage.css";
import ShoppingCartHeader from "../Headers/ShoppingCartHeader";
import { useWishlist } from "../WishlistContext/WishlistContext";

const AllProductsPage = () => {
    const [productList, setProductList] = useState([]);
    const { wishlists, setWishlists } = useWishlist();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProductList(data.products);
        } else {
          console.error("Received data is not an array of products:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

const handleAddItem = async (productId) => {
    const productDetails = await fetchProductDetails(productId);
    const selectedWishlist = await promptUserToChooseWishlist();
    if (selectedWishlist) {
    setWishlists((prevWishlists) => {
        const updatedWishlists = prevWishlists.map((wishlist) => {
            if (wishlist.id === selectedWishlist.id) {
                wishlist.items.push(productDetails);
            }
            return wishlist;
        });
        localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
        return updatedWishlists;
    });
}
};

const fetchProductDetails = async (productId) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const productDetails = await response.json();

            return {
              id: productDetails.id,
              name: productDetails.title,
              price: productDetails.price,
              quantity: 1,
              mostWanted: false,
            };
          } catch (error) {
        console.error("Error fetching product details:", error);
        return null;
      }
    };
  
const promptUserToChooseWishlist = async () => {
    return wishlists && wishlists.length > 0 ? wishlists[0] : null;
}

  return (
    <div>
        <header>
            <ShoppingCartHeader />
        </header>
      <h1>All Products</h1>
      <div className="app-product-list">
        {productList.map((product) => (
          <div key={product.id} className="app-product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[1]}
                alt={product.title}
                className="app-product-image"
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => handleAddItem(product.id)}>Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
