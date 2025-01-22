import PropTypes from "prop-types";
import { memo } from "react";

function Letter(props) {
  return (
    <div className="word-grid__letter">{props.isGuessed && props.letter}</div>
  );
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  isGuessed: PropTypes.bool.isRequired,
};

export default memo(Letter);
