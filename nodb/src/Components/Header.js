import React from "react";
import "../App.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="headerTitle" >
        <span role="img" aria-label="order">
        🥩BBQ SHOP🥩
        </span>
      </h1>
      <h1 className="headerTitle" >Enter Order:</h1>
    </header>
  );
}




