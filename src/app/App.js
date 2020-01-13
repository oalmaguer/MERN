import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      tasks: [],
      _id: ""
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(e) {
    console.log(this.state);
    console.log("Obteniendo datos");
    if (this.state._id) {
      fetch(`/api/tasks/${this.state._id}`, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({ html: "Task Updated", classes: "blue darken-1 rounded" });
          this.setState({ title: "", description: "", _id: "" });
          this.fetchTasks();
        });
    } else {
      fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({ html: "Task Saved", classes: "green darken-1 rounded" });
          this.setState({ title: "", description: "" });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }
    e.preventDefault();
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ tasks: data });
        console.log(this.state.tasks);
      }); //por defecto es metodo get
  }

  deleteTask(id) {
    console.log("eliminar", id);
    if (confirm("Are you sure you want to delete it?")) {
      fetch(`/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({ html: "Task deleted", classes: "red darken-1 rounded" });
          this.fetchTasks();
        });
    }
  }

  editTask(id) {
    fetch(`/api/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
          _id: data._id
        });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="light-gray">
        {/* navegacion */}
        <nav className="light-blue darken-1">
          <div className="container">
            <a className="brand-logo" href="/">
              Mern Stack
            </a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          name="title"
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Titulo tarea"
                          value={this.state.title}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          name="description"
                          onChange={this.handleChange}
                          placeholder="Description"
                          className="materialize-textarea"
                          value={this.state.description}
                        ></textarea>
                      </div>
                    </div>
                    <button className="btn light-blue darken-1" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tasks.map(task => {
                    return (
                      <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                          <button
                            className="btn light-blue"
                            onClick={() => this.editTask(task._id)}
                          >
                            <i className="material-icons">edit</i>
                          </button>
                          <button
                            className="btn red"
                            style={{ margin: "10px" }}
                            onClick={() => this.deleteTask(task._id)}
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
