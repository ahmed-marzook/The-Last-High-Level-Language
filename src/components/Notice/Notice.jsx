import PropTypes from "prop-types";
import "./Notice.css";

function Notice(props) {
  const getMessage = () => {
    return <>&quot;{props.message}&quot;</>;
  };
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
            {getMessage()}
          </div>
        </section>
      )}
    </>
  );
}

Notice.propTypes = {
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Notice;
