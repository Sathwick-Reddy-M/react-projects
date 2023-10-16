import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((persons) => this.setState({ persons: persons.users }));
  }

  searchEvent = (event) => {
    const searchTerm = event.target.value.toLocaleLowerCase();
    this.setState({ search: searchTerm });
  };

  render() {
    const filtered = this.state.persons.filter((person) => {
      let name =
        person.firstName.toLocaleLowerCase() +
        " " +
        person.lastName.toLocaleLowerCase();
      return name.includes(this.state.search);
    });
    return (
      <div>
        <input
          type="search"
          placeholder="search persons"
          onChange={this.searchEvent}
        />
        {filtered.map((person) => {
          return (
            <div key={person.id}>
              <p>{person.firstName + " " + person.lastName}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
