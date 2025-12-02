import React, { useEffect, useState } from "react";
import "./mindgame.css";
import firstCar from "./images/firstCar.png";
import secondCar from "./images/secondCar.png";
import thirdCar from "./images/thirdCar.png";
import fourthCar from "./images/fourthCar.png";
import fifthCar from "./images/fifthCar.png";
import sixCar from "./images/sixCar.png";
import seventhCar from "./images/seventhCar.png";
import eigthCar from "./images/eigthCar.png";
import { Link } from "react-router-dom";

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

const MindGame = () => {
  const [cards, setCards] = useState([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState(null);
  const [secondSelectedCard, setSecondSelectedCard] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(40);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showAllCards, setShowAllCards] = useState(true);

  // Initialize game
  useEffect(() => {
    const shuffled = doubled_Images
      .map((img) => ({ ...img, flipped: false, key: crypto.randomUUID() }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);

    // Show all cards for first 2 seconds
    const timer = setTimeout(() => {
      setShowAllCards(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer <= 0) {
      setGameOver(true);
      return;
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Check for match when two cards are selected
  useEffect(() => {
    if (firstSelectedCard !== null && secondSelectedCard !== null) {
      const isMatch =
        cards[firstSelectedCard].id === cards[secondSelectedCard].id;

      if (isMatch) {
        setMatchedCards((prev) => [
          ...prev,
          cards[firstSelectedCard].key,
          cards[secondSelectedCard].key,
        ]);
        setScore((prev) => prev + 1);
        setFirstSelectedCard(null);
        setSecondSelectedCard(null);
      } else {
        setTimeout(() => {
          setFirstSelectedCard(null);
          setSecondSelectedCard(null);
        }, 1000);
      }
    }
  }, [firstSelectedCard, secondSelectedCard, cards]);

  // Check if game is won
  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameWon(true);
      setGameOver(true);
    }
  }, [matchedCards, cards.length]);

  const flipCard = (index) => {
    if (
      gameOver ||
      gameWon ||
      matchedCards.includes(cards[index].key) ||
      firstSelectedCard === index ||
      secondSelectedCard === index
    ) {
      return;
    }

    if (firstSelectedCard === null) {
      setFirstSelectedCard(index);
    } else {
      setSecondSelectedCard(index);
    }
  };

  const resetGame = () => {
    const shuffled = doubled_Images
      .map((img) => ({ ...img, flipped: false, key: crypto.randomUUID() }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFirstSelectedCard(null);
    setSecondSelectedCard(null);
    setMatchedCards([]);
    setScore(0);
    setTimer(40);
    setGameOver(false);
    setGameWon(false);
    setShowAllCards(true);

    // Show all cards for first 2 seconds
    const timer = setTimeout(() => {
      setShowAllCards(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  const isCardFlipped = (index) => {
    // Show all cards during first 2 seconds
    if (showAllCards) {
      return true;
    }
    return (
      firstSelectedCard === index ||
      secondSelectedCard === index ||
      matchedCards.includes(cards[index]?.key)
    );
  };

  return (
    <>
      <Link to="/calendar">
        <button className="btn btn-secondary">Go to Calendar</button>
      </Link>
      <h1>Memory Game</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h5 style={{ color: timer < 10 ? "red" : "black" }}>Timer: {timer}s</h5>
        <h5>Score: {score}</h5>
        {gameWon && (
          <h3 style={{ color: "green" }}>🎉 You Won! Final Score: {score}</h3>
        )}
        {gameOver && !gameWon && (
          <h3 style={{ color: "red" }}>Game Over! Final Score: {score}</h3>
        )}
        <button
          onClick={resetGame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {gameOver ? "Play Again" : "Reset"}
        </button>
      </div>

      <div className="grid-container">
        {cards.map((item, index) => (
          <div
            key={item.key}
            className="card"
            onClick={() => flipCard(index)}
            style={{
              opacity: matchedCards.includes(item.key) ? 1 : 1,
              cursor: gameOver ? "not-allowed" : "pointer",
            }}
          >
            <img
              src={item.src}
              alt={item.id}
              className={isCardFlipped(index) ? "" : "d-none"}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MindGame;
