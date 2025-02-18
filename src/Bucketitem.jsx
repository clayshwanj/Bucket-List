export function Bucketitem(completed, id, title, toggleTodo, deleteTodo) {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked="completed"
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />

          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
      ;
    </>
  );
}
