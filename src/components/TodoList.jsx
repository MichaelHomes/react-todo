/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export const TodoList = ({ task, editText, handleDelete, handleToggle }) => {
  return (
    <div className="list-items">
      {task.length ? (
        task.map((task, index) => (
          <TodoItem
            task={task}
            key={index}
            edit={editText}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      ) : (
        <div>Empty List...</div>
      )}
    </div>
  );
};

export default TodoList;
