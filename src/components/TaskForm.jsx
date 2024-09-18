import React from "react";
import "./TaskComponent.css";
import Tag from "./Tag";
import { useState } from "react";

function TaskForm(props) {
  const [tasks, setTasks] = useState({
    task: "",
    type: "todo",
    tags: [],
  });
  const onSubmit = (e) => {
    e.preventDefault();
    props.setTodo((prev) => {
      return [...prev, tasks];
    });
    setTasks({
      task: "",
      type: "todo",
      tags: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTasks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleTagChange = (e) => {
    if (tasks.tags.some((item) => item === e.target.name)) {
      const filterTags = tasks.tags.filter((item) => item !== e.target.name);
      setTasks((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTasks((prev) => {
        return { ...prev, tags: [...prev.tags, e.target.name] };
      });
    }
  };

  const checkTag = (e) => {
    return tasks.tags.some((item) => item === e);
  };

  return (
    <header className="app_header">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={tasks.task}
          className="task_input"
          placeholder="Enter your task"
          name="task"
          onChange={handleChange}
        ></input>
        <div className="task_form_bottom_line">
          <div>
            <Tag
              name="HTML"
              handleTagChange={handleTagChange}
              selected={checkTag("HTML")}
            />
            <Tag
              name="CSS"
              handleTagChange={handleTagChange}
              selected={checkTag("CSS")}
            />
            <Tag
              name="JS"
              handleTagChange={handleTagChange}
              selected={checkTag("JS")}
            />
            <Tag
              name="React"
              handleTagChange={handleTagChange}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="type"
              value={tasks.type}
              onChange={handleChange}
            >
              <option value="todo">ToDo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              +Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;
