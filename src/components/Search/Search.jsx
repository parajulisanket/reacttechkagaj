// /src/components/search/Search.jsx
import React, { useState } from "react";
import "./Search.css"; // Import the CSS for the modal
import logo from "../../assets/logo.png"; // Import logo image

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for modal visibility

  // Function to open the search modal
  const openSearchModal = () => {
    setIsSearchOpen(true);
  };

  // Function to close the search modal
  const closeSearchModal = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Search button */}
      <button
        type="button"
        className="search"
        aria-label="Search"
        onClick={openSearchModal}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-modal-overlay">
          <div className="search-modal">
            <div className="modal-header">
              {/* Left side - Logo */}
              <div className="modal-logo">
                <img src={logo} alt="Logo" className="search-logo" />
              </div>

              {/* Right side - Close Icon */}
              <div className="modal-close" onClick={closeSearchModal}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>

            {/* Input field for search */}
            <input
              type="text"
              placeholder="यहां टाइप गर्नुहोस् ..."
              className="search-input"
            />

            {/* Right end - "खोजनुहोस्" button */}
            <button className="search-submit">खोजनुहोस्</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
