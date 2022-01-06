import propTypes from "prop-types";
function Button({ text }) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
Button.propTypes = {
  text: propTypes.string.isRequired,
};
export default Button;
