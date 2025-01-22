import React from "react";
import PropTypes from "prop-types";
import "./Notice.css";

function Notice(props) {
  return (
    <>
      {props.message && (
        <section>
          <div
            className="game-notice"
            style={{
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            &quot;{props.message}&quot;
          </div>
        </section>
      )}
    </>
  );
}

Notice.propTypes = {};

export default Notice;
