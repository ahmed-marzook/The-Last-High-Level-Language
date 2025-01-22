import PropTypes from "prop-types";

function Letter(props) {
  return (
    <div className="word-grid__letter">{props.isGuessed && props.letter}</div>
  );
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  isGuessed: PropTypes.bool.isRequired,
};

export default Letter;
