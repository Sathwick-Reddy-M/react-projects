import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import NameCard from "./components/name-card/name-card.component";
import NameSearch from "./components/name-search/name-search.component";
import { getData } from './utils/data.utils';

export type Person = {
  id: number,
  firstName: string,
  lastName: string
}

type Persons = {
  users: Person[]
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [persons, setPersons] = useState<Person[]>([]);
  const [filtered, setFiltered] = useState(persons);

  useEffect(() => {
      const fecthUsers = async () => {
        const users = await getData<Persons>('https://dummyjson.com/users');
        setPersons(users.users);
      }
      fecthUsers();
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

  const searchEvent = (event: ChangeEvent<HTMLInputElement>): void => {
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
