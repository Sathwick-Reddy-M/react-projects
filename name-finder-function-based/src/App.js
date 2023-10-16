import { useState, useEffect } from "react";
import "./App.css";
import NameCard from "./components/name-card/name-card.component";
import NameSearch from "./components/name-search/name-search.component";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((personsRes) => setPersons(personsRes.users));
  }, []);

  useEffect(() => {
    setFiltered(
      persons.filter((person) => {
        let name =
          person.firstName.toLocaleLowerCase() +
          " " +
          person.lastName.toLocaleLowerCase();
        return name.includes(searchTerm);
      })
    );
  }, [persons, searchTerm]);

  const searchEvent = (event) => {
    const searchTermValue = event.target.value.toLocaleLowerCase();
    setSearchTerm(searchTermValue);
  };

  return (
    <div>
      <NameSearch eventHandler={searchEvent}></NameSearch>
      <NameCard filteredPersons={filtered}></NameCard>
    </div>
  );
}

export default App;
