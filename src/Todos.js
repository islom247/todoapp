import React from "react";

const Todos = ({ todos, deleteToDo }) => {
  const toDoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteToDo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );
  return <div className="todos collection">{toDoList}</div>;
};
export default Todos;
