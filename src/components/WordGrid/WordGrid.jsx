import PropTypes from "prop-types";
import "./WordGrid.css";
import Letter from "../Letter/Letter";
import { nanoid } from "nanoid";

function WordGrid(props) {
  return (
    <section className="word-grid">
      {props.word.split("").map((letter) => (
        <Letter key={nanoid()} letter={letter.toUpperCase()} isGuessed={true} />
      ))}
    </section>
  );
}

WordGrid.propTypes = {};

export default WordGrid;
