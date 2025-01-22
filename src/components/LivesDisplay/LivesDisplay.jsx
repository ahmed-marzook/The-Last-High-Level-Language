import "./LivesDisplay.css";
import PropTypes from "prop-types";
import languageLives from "../../data/languageLives";
import LivesLanguage from "../LIvesLanguage/LivesLanguage";
import Notice from "../Notice/Notice";

function LivesDisplay(props) {
  return (
    <>
      <Notice />
      <section className="lives-display">
        {languageLives.map((life) => (
          <LivesLanguage
            key={life.attempts}
            backgroundColor={life.backgroundColor}
            textColor={life.textColor}
            language={life.language}
            isEliminated={life.attempts > props.attemptsLeft}
          />
        ))}
      </section>
    </>
  );
}

LivesDisplay.propTypes = {};

export default LivesDisplay;
