import PropTypes from "prop-types";
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired, // Ensure completed is a boolean and required
  id: PropTypes.number.isRequired, // Ensure id is a number and required
  title: PropTypes.string.isRequired, // Ensure title is a string and required
  toggleTodo: PropTypes.func.isRequired, // Ensure toggleTodo is a function and required
  deleteTodo: PropTypes.func.isRequired, // Ensure deleteTodo is a function and required
};
