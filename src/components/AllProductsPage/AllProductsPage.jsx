// PATH: 'src/components/AllProductsPage/AllProductsPage.jsx'

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AllProductsPage.css";
import ProductPageHeader from "../Headers/ProductPageHeader";

const AllProductsPage = () => {
    const [productList, setProductList] = useState([]);

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
    setWishlists((prevWishlists) => {
        const updatedWishlists = prevWishlists.map((wishlist) => {
            if (wishlist.id === selectedWishlist.id) {
                wishlist.items.push(productDetails);
            }
            return wishlist;
        })
        localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));
        return updatedWishlists;
    });
};

const fetchProductDetails = async (productId) => {
    return { id: productId, name: "Dummy Product", price: 20.99, quatity: 1, mostWanted: false };
};

const promptUserToChooseWishlist = async () => {
    return wishlists.length > 0 ? wishlists[0] : null;
}

  return (
    <div>
        <header>
            <ProductPageHeader />
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
