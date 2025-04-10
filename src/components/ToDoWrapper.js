import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();
const ToDoWrapper = () => {
  const [todos, setToDos] = useState([]);
  const addToDo = (todo) => {
    setToDos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) =>
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.Complete } : todo
      )
    );
    const deleteTodo = (id) => {
      setToDos(todos.filter((todo) => todo.id !== id));
    };
  const editTodo = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div>
      <TodoForm addToDo={addToDo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
