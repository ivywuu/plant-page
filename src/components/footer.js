import React from "react";
import "./components.css";

function footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footerContainer">
          <h2>Ivy's Plants</h2>
          <p>Adopting plants since 2023</p>
        </div>

        <div className="footerContainer">
          <h3>RIP</h3>
          <p>Mini-Cucumber</p>
          <p>Roma Tomato</p>
          <p>Mexican Key Lime Tree</p>
        </div>

        <div className="footerContainer">
          <h3>Current Favourites</h3>
          <p>Grape Tomato</p>
        </div>
      </footer>
    </div>
  );
}

export default footer;
