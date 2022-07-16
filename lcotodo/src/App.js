import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      // "list" variable has all the values of "this.state.list"
      list.push(newItem);
      // newItem added to "list", so now, "list" has all the previous values, as well as the new values too.

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  // Whenever we type anything in the input textbox, DOM re-renders, and "newItem" value of state is updated.

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">LCO ToDo App</h1>
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a ToDo"
            required
            value={this.state.newItem}
            onChange={
              (e) => this.updateInput(e.target.value)
              // list having all the values, and the newly added value, is added to the state(always use setState function to update the state)
            }
          ></input>
          <button
            className="add-btn"
            onClick={
              () => this.addItem(this.state.newItem)
              // Whenever this button is clicked, addItem function runs, DOM re-renders, List is updated, and "newItem" value of state becomes ""
            }
            disabled={!this.state.newItem.length}
          >
            Add ToDo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li
                    key={item.id}
                    // We need to know that if we are looping through a list, items are unique. So, "key" here ensures looping through unique items
                  >
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => {
                        this.deleteItem(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Record Youtube Videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
