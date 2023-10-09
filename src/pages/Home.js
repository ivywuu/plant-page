import React from "react";
import "./styling/Home.css";
import homeBackground from "../components/img/homePage.PNG";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mainPage">
      <h1 className="homeTitle">Ivy's Plants</h1>
      <body>
        <div className="homeContainer">
          <img src={homeBackground} alt="Home page background"></img>

          <div className="plantButton">
            <Link to="/plants">
              <button type="button">View Plants</button>
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
