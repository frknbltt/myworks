import React, { Component } from "react";
import "./Todo.css";

class TodoUser extends Component {
  render() {
    const { date, onDelete, id, onMaked, isDone, not } = this.props;
    return (
      <div className="todo-head">
        <div className="left-side">
          <p>{date}</p>
          <p
            style={{
              textDecoration: isDone ? "line-through" : "initial",
            }}
          >
            {not}
          </p>
        </div>
        <div className="head-buttons">
          <button onClick={() => onDelete(id)} className="first-child">
            Delete
          </button>
          <button className="second-child" onClick={() => onMaked(id)}>
            Done
          </button>
        </div>
      </div>
    );
  }
}
export default TodoUser;
