import React from "react";
import PropTypes from "prop-types";
import "./Keyboard.css";
import KeyboardKey from "../KeyboardKey/KeyboardKey";

function Keyboard(props) {
  return (
    <main className="game-keyboard">
      {props.keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((keyData) => (
            <KeyboardKey
              key={keyData.key}
              letter={keyData.key}
              status={
                props.gameStatus === "playing" ? keyData.status : "gameOver"
              }
              onKeyPressed={props.onKeyPressed}
            />
          ))}
        </div>
      ))}
    </main>
  );
}

Keyboard.propTypes = {};

export default Keyboard;
