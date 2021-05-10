import React, { Component } from "react";
import "./Todo.css";

class CustomButton extends Component {
  render() {
    const { onReset, onAdd } = this.props;
    return (
      <div className="buttons">
        <button className="button-reset" onClick={() => onReset()}>
          reset
        </button>

        <button className="button-add" onClick={() => onAdd()}>
          add
        </button>
      </div>
    );
  }
}
export default CustomButton;
