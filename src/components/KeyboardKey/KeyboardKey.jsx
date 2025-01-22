import PropTypes from "prop-types";
import { memo } from "react";

const KeyboardKey = (props) => {
  const statusClass = {
    correct: "correct",
    incorrect: "incorrect",
    unused: "",
  }[props.status || "unused"];

  const isDisabled = props.status === "correct" || props.status === "incorrect";

  return (
    <button
      disabled={isDisabled}
      onClick={() => props.onKeyPressed(props.letter)}
      className={`key ${statusClass}`}
    >
      {props.letter}
    </button>
  );
};

KeyboardKey.propTypes = {
  letter: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["correct", "incorrect", "unused"]),
  onKeyPressed: PropTypes.func.isRequired,
};

export default memo(KeyboardKey);
