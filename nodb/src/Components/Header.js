import React from "react";
import "../App.css";

export default function Header(props) {
  return (
    <header>
      <h2>
        <span role="img" aria-label="order">
          🍱
        </span>
      </h2>
      <h1>Enter Order:</h1>
    </header>
  );
}
