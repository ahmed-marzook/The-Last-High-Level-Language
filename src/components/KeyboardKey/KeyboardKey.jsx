import React from "react";
import PropTypes from "prop-types";

function KeyboardKey(props) {
  const getKeyClass = () => {
    switch (props.status) {
      case "correct":
        return "correct";
      case "incorrect":
        return "wrong";
      case "unused":
      default:
        return "";
    }
  };

  return <button className={"key " + getKeyClass()}>{props.letter}</button>;
}

KeyboardKey.propTypes = {};

export default KeyboardKey;
