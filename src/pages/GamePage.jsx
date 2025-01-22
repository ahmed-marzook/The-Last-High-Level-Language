import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import WordGrid from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import { keyboardLayout } from "../data/keyboardLayout";
import { useState } from "react";
import { generateSlug } from "random-word-slugs";

const options = {
  format: "camel",
  partsOfSpeech: ["noun"],
  categories: {
    noun: ["animals", "food", "transportation", "sports", "place"],
  },
};

export default function GamePage() {
  const [keyboard, setKeyboard] = useState(keyboardLayout);

  const [word, setWord] = useState(() =>
    generateSlug(1, options).toUpperCase()
  );
  // const [word, setWord] = useState("ORANGE");
  const [guessedLetters, setGuessedLetters] = useState(new Set([]));
  const [remainingAttempts, setRemainingAttempts] = useState(8);
  const [gameStatus, setGameStatus] = useState("playing");

  const wordSet = new Set(word.toUpperCase());

  function newGame() {
    setWord(generateSlug(1, options).toUpperCase());
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
      console.log("HINT");
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
      <Keyboard
        keyboardLayout={keyboard}
        onKeyPressed={keyPressed}
        gameStatus={gameStatus}
      />
      <Footer />
    </div>
  );
}
