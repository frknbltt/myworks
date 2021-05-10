import React, { Component, setState } from "react";
import CustomButton from "./CustomButton";
import "./Todo.css";
import TodoUser from "./TodoUser";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      notlar: [],
    };
  }
  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    let prevState = this.state.notlar;
    prevState.push({
      not: this.state.text,
      id: Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
      isCompleted: false,
    });

    this.setState({ notlar: prevState, text: "" });

    localStorage.setItem("notlar", JSON.stringify(prevState));
  };

  handleReset = () => {
    this.setState({ notlar: [] });
    localStorage.clear();
  };

  handleDelete = (xx) => {
    let delstate = this.state.notlar;
    delstate = delstate.filter((item) => item.id !== xx);
    this.setState({ notlar: delstate });
    localStorage.setItem("notlar", JSON.stringify(delstate));
  };

  handleMaked = (id) => {
    let prevNotes = this.state.notlar;
    prevNotes.map((not) => {
      if (not.id === id) {
        not.isCompleted = not.isCompleted ? false : true;
      }
    });
    this.setState({ notlar: prevNotes });
    localStorage.setItem("notlar", JSON.stringify(prevNotes));
  };
  componentDidMount() {
    let notlar = localStorage.getItem("notlar");
    console.log(notlar);
    if (notlar) {
      this.setState({ notlar: JSON.parse(notlar) });
    }
  }

  findIsCompleted = (id) =>
    this.state.notlar.find((item) => item.id === id).isCompleted;

  render() {
    return (
      <div className="todo-app">
        <ul className="todo-items-container">
          {this.state.notlar.map((item) => {
            return (
              <TodoUser
                id={item.id}
                not={item.not}
                date={item.date}
                onDelete={this.handleDelete}
                onMaked={this.handleMaked}
                isDone={this.findIsCompleted(item.id)}
              />
            );
          })}
        </ul>

        <div className="todo-add">
          <div className="reset-div">
            <h5>MY TO DO LİST</h5>
          </div>
          <div className="input-div">
            <input
              className="add-input"
              type="text"
              placeholder="Add something to do..."
              value={this.state.text}
              onChange={this.handleInputChange}
            />

            <i class="fas fa-pencil-alt" onClick={this.handleSubmit}></i>
          </div>
          <div>
            <CustomButton
              onReset={this.handleReset}
              onAdd={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ToDo;
