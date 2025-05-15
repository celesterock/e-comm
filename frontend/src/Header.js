import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { logEvent } from "./logEvent";
import axios from "axios";
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchterm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://18.118.30.57:5000/search?query=${searchTerm}`
      );
      console.log("Search results:", res.data);
    } catch (err) {
      console.error("Search failed:", err.response?.data || err.message);
    }
  };

  const searchProducts = async (searchTerm) => {
    // const res = await axios.get(
    //   `http://localhost:5000/api/search?query=${query}`
    // );
    // return res.data;
    await logEvent({
      endpoint: "/search",
      body: { query: searchTerm },
    });
  };
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        E-commerce
      </Link>
      <div className="header__location">
        <FaMapMarkerAlt />
        <div className="header__locationText">
          <span>Hello</span>
          <strong>Select your address</strong>
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchterm(e.currentTarget.value)}
        />
        <button
          type="submit"
          className="header__searchButton"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/login" className="hover:underline">
          <div className="header__signin text-right">
            <span className="block text-xs">Hello, Sign in</span>
            <strong className="text-sm">Account & Lists</strong>
          </div>
        </Link>
      </div>

      <div className="header__cart">
        <FaShoppingCart size={20} />
        <span>Cart</span>
      </div>
    </header>
  );
};

export default Header;
