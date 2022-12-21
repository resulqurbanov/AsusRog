import React from "react";
import "./style.scss";
function Action() {
  return (
    <div>
      <h1>ROG IN ACTION</h1>
      <div>
        <a href="">
          <img src="https://dlcdnrog.asus.com/rog/media/1671059676670.webp" alt=""/>
          <h4>Gaming</h4>
          <p>After one year with Xbox Game Pass, I'm never giving it up</p>
          <p>
            I once dreamed of a day when I could play any game I wanted,
            whenever I wanted, with the push of a button. Xbox Game Pass made
            that dream a reality.{" "}
          </p>
        </a>
        <a href="">
          <img src="https://dlcdnrog.asus.com/rog/media/1664418290661.webp" alt=""/>
          <h4>Gaming</h4>
          <p>
            Star Citizen: 10 years of pushing the boundaries of what a game can
            be
          </p>
          <p>
            Star Citizen is a space simulation game that has spent a decade
            redefining what is possible in the genre.
          </p>
        </a>
        <a href="">
          <img src="https://dlcdnrog.asus.com/rog/media/1652837729215.webp" alt=""/>
          <h4>Gaming</h4>
          <p>
            Take an incredible journey across the Old West in Red Dead
            Redemption 2
          </p>
          <p>
            Travel back in time to the Old West with this story-driven
            masterpiece.
          </p>
        </a>
      </div>
      <a href="">LEARN MORE <i class="fa-solid fa-chevron-right"></i></a>
    </div>
  );
}

export default Action;
