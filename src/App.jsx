import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTask = localStorage.getItem("todo");

const App = () => {
  const [todo, setTodo] = useState(JSON.parse(oldTask) || []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (taskIndex) => {
    setTodo(todo.filter((task, index) => index !== taskIndex));
  };

  return (
    <div>
      <TaskForm setTodo={setTodo} />
      <main className="app_main">
        <TaskColumn
          title="ToDo"
          icon={todoIcon}
          taskList={todo}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          taskList={todo}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          taskList={todo}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
