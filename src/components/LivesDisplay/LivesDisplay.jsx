import "./LivesDisplay.css";
import PropTypes from "prop-types";
import languageLives from "../../data/languageLives";
import LivesLanguage from "../LivesLanguage/LivesLanguage";
import Notice from "../Notice/Notice";

function LivesDisplay({ attemptsLeft, gameStatus }) {
  const gameStateDisplay = (() => {
    switch (gameStatus) {
      case "won":
        return {
          message: "YOU WIN! Well Done!",
          backgroundColor: "#4CAF50",
          textColor: "#FFFFFF",
        };
      case "gameOver":
        return {
          message:
            "GAME OVER! All languages reduced to Assembly. Better start learning Assembly",
          backgroundColor: "#F44336",
          textColor: "#FFFFFF",
        };
    }

    // If game is still in progress, handle lives display
    // If we have all attempts (8), return empty message object
    if (attemptsLeft + 1 > 8) {
      return {
        message: "",
        backgroundColor: "",
        textColor: "",
      };
    }

    // Find the first language that matches our current attempts count
    const language = languageLives.find(
      (lang) => lang.attempts === attemptsLeft + 1
    );

    // If we found a matching language, return it
    if (language) {
      return language;
    }

    // If no matching language found (shouldn't happen with your data)
    return {
      message: "",
      backgroundColor: "",
      textColor: "",
    };
  })();

  return (
    <>
      <Notice
        message={gameStateDisplay.message}
        backgroundColor={gameStateDisplay.backgroundColor}
        textColor={gameStateDisplay.textColor}
        gameStatus={gameStatus}
      />
      <section className="lives-display">
        {languageLives.map((life) => (
          <LivesLanguage
            key={life.attempts}
            backgroundColor={life.backgroundColor}
            textColor={life.textColor}
            language={life.language}
            isEliminated={life.attempts > attemptsLeft}
          />
        ))}
      </section>
    </>
  );
}

LivesDisplay.propTypes = {};

export default LivesDisplay;
