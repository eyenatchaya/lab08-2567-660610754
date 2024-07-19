import React from "react"
const decoration = (isDone) => {
  return isDone ? "line-through" : "";
};
const Task = (props) => {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span style={{ textDecoration: decoration(props.isDone) }}>
        {props.title}
      </span>
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};