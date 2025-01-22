import PropTypes from "prop-types";
import "./WordGrid.css";
import Letter from "../Letter/Letter";

function WordGrid(props) {
  const isGuessedLetter = (letter) => {
    return props.guessedLetters.has(letter.toUpperCase());
  };

  return (
    <section className="word-grid">
      {props.word.split("").map((letter, index) => (
        <Letter
          key={index}
          letter={letter.toUpperCase()}
          isGuessed={isGuessedLetter(letter)}
        />
      ))}
    </section>
  );
}

WordGrid.propTypes = {
  word: PropTypes.string.isRequired,
  guessedLetters: PropTypes.instanceOf(Set).isRequired,
};

export default WordGrid;
