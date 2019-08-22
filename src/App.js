import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };
  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  deleteToDo = id => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
