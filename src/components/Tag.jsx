import React from "react";
import "./Tag.css";

const Tag = (props) => {
  const tagColor = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JS: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      name={props.name}
      style={props.selected ? tagColor[props.name] : tagColor["default"]}
      onClick={props.handleTagChange}
    >
      {props.name}
    </button>
  );
};

export default Tag;
