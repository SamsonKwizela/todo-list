

import React, { useState } from "react";

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>

      <h1>Edit TODO LIST </h1>
      
      <input
        className="todo_input"
        value={value}
        type="text"
        placeholder="Update your task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button type="submit" className="todo_btn">
        Edit Task
      </button>
     
    </form>
  );
};

export default EditTodoForm;
