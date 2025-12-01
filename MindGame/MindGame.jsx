import React, { use, useEffect, useState } from "react";
import "./mindgame.css";
import firstCar from "./images/firstCar.png";
import secondCar from "./images/secondCar.png";
import thirdCar from "./images/thirdCar.png";
import fourthCar from "./images/fourthCar.png";
import fifthCar from "./images/fifthCar.png";
import sixCar from "./images/sixCar.png";
import seventhCar from "./images/seventhCar.png";
import eigthCar from "./images/eigthCar.png";

const ImagesMindGame = [
  { id: "1", src: firstCar },
  { id: "2", src: secondCar },
  { id: "3", src: thirdCar },
  { id: "4", src: fourthCar },
  { id: "5", src: fifthCar },
  { id: "6", src: sixCar },
  { id: "7", src: seventhCar },
  { id: "8", src: eigthCar },
];

// ⬇️ double the list
const doubled_Images = [...ImagesMindGame, ...ImagesMindGame];

// ⬇️ shuffle (with return)
const shuffled = doubled_Images
  .map((img) => ({ ...img, flipped: false, key: crypto.randomUUID() }))
  .sort(() => Math.random() - 0.5);

const MindGame = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, usedselectedCard] = useState("");

  const flipCard = (key) => {
    setCards((prev) =>
      prev.map((card) =>
        card.key === key ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  useEffect(() => {
    setCards(shuffled);
  }, []);

  return (
    <>
      <h1>the MindGame</h1>
      <div className="grid-container">
        {cards.map((item, index) => (
          <div
            key={item.key}
            className="card"
            onClick={() => flipCard(item.key)}
          >
            <img
              src={item.src}
              alt={index}
              className={item.flipped ? "" : "d-none"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MindGame;
