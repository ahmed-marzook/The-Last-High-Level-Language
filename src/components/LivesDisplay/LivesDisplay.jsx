import "./LivesDisplay.css";
import PropTypes from "prop-types";

function LivesDisplay(props) {
  return (
    <section className="lives-display">
      <div className="lives-display__language eliminated">Python</div>
      <div className="lives-display__language">JavaScript</div>
      <div className="lives-display__language eliminated">Java</div>
      <div className="lives-display__language">C++</div>
      <div className="lives-display__language eliminated">Ruby</div>
      <div className="lives-display__language eliminated">C#</div>
      <div className="lives-display__language">C</div>
      <div className="lives-display__language">Assembly</div>
    </section>
  );
}

LivesDisplay.propTypes = {};

export default LivesDisplay;
