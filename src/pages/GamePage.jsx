import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import WordGrid from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import { keyboardLayout } from "../data/keyboardLayout";
import { useState } from "react";

export default function GamePage() {
  const [keyboard, setKeyboard] = useState(keyboardLayout);

  const [word, setWord] = useState("ORANGE");
  const [guessedLetters, setGuessedLetters] = useState(new Set([]));
  const [remainingAttempts, setRemainingAttempts] = useState(8);
  const [gameStatus, setGameStatus] = useState("playing");

  const wordSet = new Set(word.toUpperCase());

  const updateKeyboard = (layout, targetKey, newStatus) => {
    return layout.map((row) =>
      row.map((key) =>
        key.key === targetKey ? { ...key, status: newStatus } : key
      )
    );
  };

  function keyPressed(key) {
    setKeyboard((prevKeyboard) => {
      if (wordSet.has(key.toUpperCase())) {
        setGuessedLetters((prev) => prev.add(key));
        return updateKeyboard(prevKeyboard, key, "correct");
      } else {
        setRemainingAttempts(remainingAttempts - 1);
        return updateKeyboard(prevKeyboard, key, "incorrect");
      }
    });
  }
  return (
    <div className="game-content">
      <Header />
      <LivesDisplay attemptsLeft={remainingAttempts} />
      <WordGrid word={word} guessedLetters={guessedLetters} />
      <Keyboard keyboardLayout={keyboard} onKeyPressed={keyPressed} />
      <Footer />
    </div>
  );
}
