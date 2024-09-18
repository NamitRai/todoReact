import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ taskName, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p>{taskName}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tagname, index) => (
            <Tag name={tagname} key={index} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};
export default TaskCard;
