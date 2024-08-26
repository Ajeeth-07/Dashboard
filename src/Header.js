import React from "react";
import "./header.css";
import { FaBell } from "react-icons/fa"; // Importing bell icon from react-icons

const Header = () => {
  return (
    <div className="header">
      <div className="breadcrumbs">Home &gt; Dashboard</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icon">
        <FaBell size={20} />
      </div>
    </div>
  );
};

export default Header;
