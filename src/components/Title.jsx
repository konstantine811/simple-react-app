import PropTypes from "prop-types";

function Title({ name, onChildChange }) {
  return (
    <>
      <button
        onClick={() => {
          onChildChange("sdf", { name: "Title" });
        }}
        className="btn"
      >
        Event from children
      </button>
      {name ? (
        <h1 className="text-4xl text-red-500">Hello from true</h1>
      ) : (
        <h1 className="text-4xl text-green-600">Hello from false</h1>
      )}
    </>
  );
}

Title.propTypes = {
  name: PropTypes.bool.isRequired,
  onChildChange: PropTypes.func,
};

export default Title;
