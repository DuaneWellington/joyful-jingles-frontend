// PATH: 'src/components/AllProductsPage/AllProductsPage.jsx'

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AllProductsPage.css";
import ShoppingCartHeader from "../Headers/ShoppingCartHeader";
import { useWishlist } from "../WishlistContext/WishlistContext";
import ClickableProduct from "../UserDashboard/ClickableProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AllProductsPage = () => {
    const [productList, setProductList] = useState([]);
    const { wishlists, setWishlists } = useWishlist();
    const [cartCount, setCartCount] = useState(0);
    const [searchResults, setSearchResults] = useState([]);
    const [searchVisible, setSearchVisible] = useState(false);

// useEffect(() => {
//     const currentCart = localStorage.getItem("cart");
//     const cartData = currentCart ? JSON.parse(currentCart) : [];
//     setCartItems(cartData);
//     setCartCount(cartData.length);
// }, []);

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

  const addToCart = async (item) => {

    const currentCart = localStorage.getItem("cart");
    const cartItems = currentCart ? JSON.parse(currentCart) : [];
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      const updatedCartItems = [...cartItems, item];
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartCount((prevCount) => prevCount + 1);
  } else {
    console.log("Item already in cart.");
  }
};


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
    localStorage.removeItem("cart");
    setCartCount(0);
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

const toggleSearchBar = () => {
    searchVisible(!searchVisible);
};

const handleSearch = async (keyword) => {
    try {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${keyword}`
        );
        const searchData = await response.json();
        setSearchResults(searchData.products || []);
        console.log("Search Results:", searchData);
    } catch (error) {
        console.error("Error searching for products:", error);
    }
};

const selectedProducts = getRandomProducts(3);

function getRandomProducts(count) {
    const dataProducts = productList || [];
    const numProducts = dataProducts.length;

    if (numProducts === 0) {
        return [];
    }

    const randomIndices = [];
    while (randomIndices.length < count) {
        const randomIndex = Math.floor(Math.random() * numProducts);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    return randomIndices.map((index) => dataProducts[index]);
}

  return (
    <div>
        <header>
            <ShoppingCartHeader cartCount={cartCount} />
        </header>
        <div className="ud-searchAndCart">
          <ShoppingCartIcon cartCount={cartCount} />
        </div>

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

      <div className="ud-product-container">
          {searchResults.length > 0
            ? searchResults.map((item) => (
                <ClickableProduct
                  key={item.id}
                  item={item}
                  addToCart={() => addToCart(item)}
                />
              ))
            : selectedProducts.map((item) => (
                <React.Fragment key={item.id}>
                  <ClickableProduct
                    item={item}
                    addToCart={() => addToCart(item)}
                  />
                </React.Fragment>
              ))}
        </div>
    </div>
  );
};

const ShoppingCartIcon = ({ cartCount }) => (
    <Link to="/cart" className="ud-shopping-cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartCount > 0 && <div className="ud-cart-count"> {cartCount}</div>}
    </Link>
  );
  

export default AllProductsPage;
