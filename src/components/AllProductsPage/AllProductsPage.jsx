// PATH: 'src/components/AllProductsPage/AllProductsPage.jsx'

import React, { useEffect, useState } from "react";
import "../Styles/AllProductsPage.css"

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
            setProducts(data.products);
        } else {
            console.error("Received data is not an array of products:", data);
        }  
        })
        .catch((error) => {
            console.error("Error fetching products:", error)
        });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[1]} alt={product.title} className="product-image"/>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;