import { useState } from "react";

export function NewTaskForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="Header">Bucket List</h1>
      <ul className="list">
        {todos.length === 0 && "Create a Bucket List"}
        {todos.map((todo) => {
          return;
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              onChange ={(e) => toggleTodo(todo.id, e.target.checked)}
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo, id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>;
        })}
      </ul>
    </>
  );
}
