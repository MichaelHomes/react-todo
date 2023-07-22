/* eslint-disable react/prop-types */
export const TodoItem = ({ task, edit, index, handleDelete, handleToggle }) => {
  return (
    <div className={`item ${task.done && "done"}`}>
      <div className="checkbox-wrapper">
        <input type="checkbox" onChange={() => handleToggle(index)} />
      </div>
      <span>{task.text}</span>
      <button onClick={() => edit(index)}>Edit</button>
      <button onClick={() => handleDelete(index)}>X</button>
    </div>
  );
};

export default TodoItem;
