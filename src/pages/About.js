import React from "react";
import "./styling/MainPages.css";
import plantPhoto from "../components/img/Plant3.jpg";

function About() {
  return (
    <div className="mainPage">
      <h1 className="centerTitle">
        <span>About Me</span>
      </h1>
      <body>
        <div className="aboutContainer">
          <div className="aboutText aboutBlock">
            <p>
              Hi! My name is Ivy and this is where I will be displaying my
              plants! I mostly grow outdoor plants but I do keep some plants as
              houseplants for half of the year! This includes citrus plants,
              other fruit and vegetable plants and some flowers.
            </p>

            <br />

            <p>
              In general , I grow lemons, kumquat, raspberries, strawberries and
              etc. I started growing things in 2022 and am slowly expanding my
              growing area and plant collection.
            </p>

            <br />

            <table className="plantSummaryTable">
              <colgroup>
                <col span="1" className="citrus"></col>
                <col span="1" className="berries"></col>
                <col span="1" className="vegetables"></col>
                <col span="1" className="flowers"></col>
              </colgroup>
              <tr>
                <th>Citrus</th>
                <th>Berries</th>
                <th>Vegetables</th>
                <th>Flowers</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Eureka Lemon</li>
                    <li>Pink Variegated Lemon</li>
                    <li>Meyer Lemon</li>
                    <li>Kumquat </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Fall gold raspberries</li>
                    <li>Strawberry Shortcake raspberry</li>
                    <li>Eversweet Strawberries </li>
                    <li>Encore raspberries </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Grape tomatoes </li>
                    <li>Mini cucumbers </li>
                    <li>Bok choy </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Zinnias</li>
                    <li>Sunflower</li>
                    <li>Dahlias</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>

          <div className="aboutImg aboutBlock">
            <img src={plantPhoto} alt="plant"></img>
          </div>
        </div>
      </body>
    </div>
  );
}

export default About;
