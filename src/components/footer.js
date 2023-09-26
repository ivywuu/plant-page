import React from "react";
import "./components.css";

function footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footerHeading">
          <h2>Ivy's Plants</h2>
          <p>Adopting plants since 2023</p>
        </div>

        <div className="ripColumn">
          <h3>RIP</h3>
          <ul>
            <li>
              <p>Mini-Cucumber</p>
            </li>
            <li>
              <p>Roma Tomato</p>
            </li>
            <li>
              <p>Mexican Key Lime Tree</p>
            </li>
          </ul>
        </div>

        <div className="favouritesColumn">
          <h3>Current Favourites</h3>
          <ul>
            <li>
              <p>Grape Tomato</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
