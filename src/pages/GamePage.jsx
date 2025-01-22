import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import WordGrid from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import { keyboardLayout } from "../data/keyboardLayout";
import { useState } from "react";
import { generateSlug } from "random-word-slugs";

const categories = ["animals", "food", "transportation", "sports", "place"];

const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

let hint = getRandomCategory();

const getOptions = () => ({
  format: "camel",
  partsOfSpeech: ["noun"],
  categories: {
    noun: [hint],
  },
});

export default function GamePage() {
  const [keyboard, setKeyboard] = useState(keyboardLayout);

  const [word, setWord] = useState(() =>
    generateSlug(1, getOptions()).toUpperCase()
  );
  // const [word, setWord] = useState("ORANGE");
  const [guessedLetters, setGuessedLetters] = useState(new Set([]));
  const [remainingAttempts, setRemainingAttempts] = useState(8);
  const [gameStatus, setGameStatus] = useState("playing");
  const [showHint, setShowHint] = useState(false);

  const wordSet = new Set(word.toUpperCase());

  function newGame() {
    setShowHint(false);
    hint = getRandomCategory();
    setWord(generateSlug(1, getOptions()).toUpperCase());
    setKeyboard(keyboardLayout);
    setGuessedLetters(new Set([]));
    setRemainingAttempts(8);
    setGameStatus("playing");
  }

  const updateKeyboard = (layout, targetKey, newStatus) => {
    return layout.map((row) =>
      row.map((key) =>
        key.key === targetKey ? { ...key, status: newStatus } : key
      )
    );
  };

  function keyPressed(letter) {
    if (letter === "HINT") {
      setShowHint((prev) => !prev);
      return;
    } else if (letter === "⟳") {
      return newGame();
    }

    const upperKey = letter.toUpperCase();

    setKeyboard((prevKeyboard) => {
      if (wordSet.has(upperKey)) {
        setGuessedLetters((prevGuessedLetters) => {
          const newGuessedLetters = new Set(prevGuessedLetters).add(upperKey);
          if (newGuessedLetters.size === wordSet.size) {
            setGameStatus("won");
          }
          return newGuessedLetters;
        });
        return updateKeyboard(prevKeyboard, letter, "correct");
      } else {
        setRemainingAttempts(() => {
          const newAttempts = remainingAttempts - 1;
          if (newAttempts < 1) {
            setGameStatus("gameOver");
            setGuessedLetters(wordSet);
          }
          return newAttempts;
        });
        return updateKeyboard(prevKeyboard, letter, "incorrect");
      }
    });
  }
  return (
    <div className="game-content">
      <Header />
      <LivesDisplay attemptsLeft={remainingAttempts} gameStatus={gameStatus} />
      <WordGrid
        word={word}
        guessedLetters={guessedLetters}
        gameStatus={gameStatus}
      />
      {showHint && (
        <div className="hint-container">
          <p className="hint-text">
            Category: <span className="hint-category">{hint}</span>
          </p>
        </div>
      )}
      <Keyboard
        keyboardLayout={keyboard}
        onKeyPressed={keyPressed}
        gameStatus={gameStatus}
      />
      <Footer />
    </div>
  );
}
