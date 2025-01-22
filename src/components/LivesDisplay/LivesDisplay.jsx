import "./LivesDisplay.css";
import PropTypes from "prop-types";
import languageLives from "../../data/languageLives";
import LivesLanguage from "../LivesLanguage/LivesLanguage";
import Notice from "../Notice/Notice";

function LivesDisplay({ attemptsLeft }) {
  function getMessage() {
    // If we have all attempts (8), return empty string
    if (attemptsLeft + 1 > 8) {
      return "";
    }

    // Find the first language that matches our current attempts count
    const language = languageLives.find(
      (lang) => lang.attempts === attemptsLeft + 1
    );

    // If we found a matching language, return its message
    if (language) {
      return language;
    }

    // If no matching language found (shouldn't happen with your data)
    return "";
  }

  return (
    <>
      <Notice
        message={getMessage().message}
        backgroundColor={getMessage().backgroundColor}
        textColor={getMessage().textColor}
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
