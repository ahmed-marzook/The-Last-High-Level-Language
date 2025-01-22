import PropTypes from "prop-types";
import "./LivesLanguage.css";
import { memo } from "react";

function LivesLanguage(props) {
  const className = `lives-display__language ${
    props.isEliminated ? "eliminated" : ""
  }`;

  return (
    <div
      className={className}
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      {props.language}
    </div>
  );
}

LivesLanguage.propTypes = {};

export default memo(LivesLanguage);
