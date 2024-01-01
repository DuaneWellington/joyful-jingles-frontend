// PATH: 'src/components/Search/SearchBar.jsx'

// import React, { useState } from "react";

// const SearchBar = ({ onSearch, onSearchResults }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = async () => {
//     onSearch(searchTerm);

//     try {
//       const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
//       const searchData = await response.json();
//       onSearchResults(searchData.products || []);
//     } catch (error) {
//       console.error("Error searching for products:", error);
//     }
//   };

//   return (
//     <div className="ud-search-bar">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
