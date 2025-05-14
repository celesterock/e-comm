import React from "react";
import "./SubHeader.css";
import { FaBars } from "react-icons/fa";

const SubHeader = () => {
  const categories = [
    "All",
    "Fresh",
    "Bestsellers",
    "Mobiles",
    "Today's Deals",
    "Prime",
    "New Releases",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Computers",
    "Books",
  ];

  return (
    <div className="subheader">
      <div className="subheader-container">
        <div className="subheader-item">
          <FaBars className="subheader-icon" />
          <span>
            <strong>All</strong>
          </span>
        </div>
        {categories.slice(1).map((item, index) => (
          <div className="subheader-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
