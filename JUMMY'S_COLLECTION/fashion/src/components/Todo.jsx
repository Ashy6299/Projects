import React, { useState } from "react";

function Todo() {
  const [TodoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...TodoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) => {
    setTodoList(TodoList.filter((task) => task !== taskName));
  };
  return (
    <>
      <div className='addTask'>
        <input type='text' placeholder='Add Task' onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        <ol>
          {TodoList.map((task) => {
            return (
              <li key={task}>
                {task}
                <button
                  onClick={() => {
                    deleteTask(task);
                  }}
                >
                  {" "}
                  X{" "}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default Todo;
