import { Component } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

//custom context
import { TaskProvider } from "./context/customContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  componentDidMount() {
    this.setState({
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
    });
  }
  addToLocalStorage = () => {
    let name = "suraj";
    let email = "surajmurmubusy@gmail.com";

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  removeFromLocalStorage = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };
  render() {
    return (
      <div className="App">
        {/* <div className="localStorage-container">
          <div className="ls-data">
            <p>Name : {this.state.name}</p>
            <p>Email : {this.state.email}</p>
          </div>
          <button onClick={this.addToLocalStorage}>Save in LocalStorage</button>
          <br />
          <button onClick={this.removeFromLocalStorage}>
            Remove from LocalStorage
          </button>
        </div> */}
        <h2 className="App-heading">todos</h2>
        <TaskProvider>
          <AddTask />
          <DisplayTasks />
        </TaskProvider>
      </div>
    );
  }
}

export default App;
