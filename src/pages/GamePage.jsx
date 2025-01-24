import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import WordGrid from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import { keyboardLayout } from "../data/keyboardLayout";
import { updateKeyboardLayout } from "../utility/updateKeyboardLayout";
import { useState } from "react";
import { generateWord } from "../utility/wordGenerator";
import JSConfetti from "js-confetti";

const CATEGORIES = ["animals", "food", "transportation", "sports", "place"];
const INITIAL_ATTEMPTS = 8;
const GAME_STATES = {
  PLAYING: "playing",
  WON: "won",
  GAME_OVER: "gameOver",
};

const getRandomCategory = () =>
  CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

export default function GamePage() {
  const [keyboard, setKeyboard] = useState(keyboardLayout);
  const [category, setCategory] = useState(getRandomCategory());
  const [word, setWord] = useState(() => generateWord(category));
  const [guessedLetters, setGuessedLetters] = useState(new Set([]));
  const [remainingAttempts, setRemainingAttempts] = useState(INITIAL_ATTEMPTS);
  const [gameStatus, setGameStatus] = useState("playing");
  const [showHint, setShowHint] = useState(false);

  const wordSet = new Set(word.toUpperCase());
  const jsConfetti = new JSConfetti();

  const newGame = () => {
    const newCategory = getRandomCategory();
    setCategory(newCategory);
    setShowHint(false);
    setWord(generateWord(newCategory));
    setKeyboard(keyboardLayout);
    setGuessedLetters(new Set());
    setRemainingAttempts(INITIAL_ATTEMPTS);
    setGameStatus(GAME_STATES.PLAYING);
  };

  const handleGameWon = () => {
    setGameStatus(GAME_STATES.WON);
    jsConfetti.addConfetti({
      emojis: ["🏆", "⭐", "🎉", "🎊", "🌟", "✨"],
    });
  };

  const handleGameOver = () => {
    setGameStatus(GAME_STATES.GAME_OVER);
    setGuessedLetters(wordSet);
    jsConfetti.addConfetti({
      emojis: ["😢", "💔", "😭", "🤦", "😫", "💀"],
    });
  };

  const handleLetterGuess = (letter) => {
    setKeyboard((prevKeyboard) => {
      if (wordSet.has(letter)) {
        setGuessedLetters((prev) => {
          const newGuessed = new Set(prev).add(letter);
          if (newGuessed.size === wordSet.size) {
            handleGameWon();
          }
          return newGuessed;
        });
        return updateKeyboardLayout(prevKeyboard, letter, "correct");
      } else {
        setRemainingAttempts(() => {
          const newAttempts = remainingAttempts - 1;
          if (newAttempts < 1) {
            handleGameOver();
          }
          return newAttempts;
        });
        return updateKeyboardLayout(prevKeyboard, letter, "incorrect");
      }
    });
  };

  const handleKeyPress = (key) => {
    switch (key) {
      case "HINT":
        setShowHint((prev) => !prev);
        break;
      case "⟳":
        newGame();
        break;
      default:
        handleLetterGuess(key.toUpperCase());
    }
  };

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
            Category: <span className="hint-category">{category}</span>
          </p>
        </div>
      )}
      <Keyboard
        keyboardLayout={keyboard}
        onKeyPressed={handleKeyPress}
        gameStatus={gameStatus}
      />
      <Footer />
    </div>
  );
}
