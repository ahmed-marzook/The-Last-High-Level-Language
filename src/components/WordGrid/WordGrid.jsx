import PropTypes from "prop-types";
import "./WordGrid.css";

function WordGrid(props) {
  return (
    <section className="word-grid">
      <div className="word-grid__letter">B</div>
      <div className="word-grid__letter">R</div>
      <div className="word-grid__letter">F</div>
      <div className="word-grid__letter">R</div>
      <div className="word-grid__letter"></div>
      <div className="word-grid__letter"></div>
      <div className="word-grid__letter">R</div>
      <div className="word-grid__letter">R</div>
    </section>
  );
}

WordGrid.propTypes = {};

export default WordGrid;
