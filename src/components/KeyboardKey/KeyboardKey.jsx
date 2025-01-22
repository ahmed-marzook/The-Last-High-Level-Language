import PropTypes from "prop-types";
import { memo } from "react";
import "./KeyboardKey.css";

const KeyboardKey = (props) => {
  const statusClass = {
    correct: "correct",
    incorrect: "incorrect",
    unused: "",
  }[props.status || "unused"];

  const isDisabled =
    props.status === "correct" ||
    props.status === "incorrect" ||
    (props.status === "gameOver" &&
      props.letter !== "HINT" &&
      props.letter !== "⟳");

  const getKeyStyle = () => {
    if (props.letter === "HINT") {
      return `key hint-key`;
    } else if (props.letter === "⟳") {
      return `key restart-key`;
    }
    return `key ${statusClass}`;
  };

  return (
    <button
      disabled={isDisabled}
      onClick={() => props.onKeyPressed(props.letter)}
      className={getKeyStyle()}
    >
      {props.letter}
    </button>
  );
};

KeyboardKey.propTypes = {
  letter: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["correct", "incorrect", "unused", "gameOver"]),
  onKeyPressed: PropTypes.func.isRequired,
};

export default memo(KeyboardKey);
