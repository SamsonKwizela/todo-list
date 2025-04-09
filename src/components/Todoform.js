import React, { useState } from "react";

const TodoForm = ({addToDo}) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addToDo(value);
    setValue("");
  }
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>

      <h1>Welcome To My Daily target (TODO LIST )</h1>
      
      <input
        className="todo_input"
        value={value}
        type="text"
        placeholder="What is your task today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button type="submit" className="todo_btn">
        Add Task
      </button>
     
    </form>
  );
};

export default TodoForm;
