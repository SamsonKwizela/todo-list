import React, { useState } from 'react'

const Todoform = () => {
  const [value, setValue]= useState("")
  return (
    <form className='ToDoForm'>
      <input className='todo_input'
       type='text'
       placeholder='What is your task today?'
       onChange={(e)=>{setValue(e.target.value)}}/>
      <button type='submit'
       className='todo_btn' 
       >Add Task</button>
    </form>
   
  )
}

export default Todoform
