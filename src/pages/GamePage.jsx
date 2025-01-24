import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import WordGrid from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import useGameState from "../hooks/useGameState";

export default function GamePage() {
  const {
    newGame,
    handleLetterGuess,
    setShowHint,
    keyboard,
    category,
    word,
    guessedLetters,
    remainingAttempts,
    gameStatus,
    showHint,
  } = useGameState();

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
