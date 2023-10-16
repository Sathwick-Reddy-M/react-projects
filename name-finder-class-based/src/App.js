import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import NameCard from "./components/name-card/name-card.component";
import NameSearch from "./components/name-search/name-search.component";

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
        <NameSearch eventHandler={this.searchEvent}></NameSearch>
        <NameCard filteredPersons={filtered}></NameCard>
      </div>
    );
  }
}

export default App;
