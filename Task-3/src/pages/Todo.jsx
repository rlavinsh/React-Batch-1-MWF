import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    // console.log(todo);
    setTodos([...todos, todo]);
    // console.log(todos);
  }
  console.log(todos);
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">My Todo App</h1>

          <p className="mt-2 text-gray-500">Manage your daily tasks</p>
        </div>

        <TodoForm addTodo={addTodo} />

        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default Todo;
