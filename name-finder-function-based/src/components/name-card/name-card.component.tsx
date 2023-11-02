import { Person } from "../../App";

type Props = {
  filteredPersons: Person[]
}

function NameCard(props: Props) {

  return props.filteredPersons.map((person) => {
      return (
        <div key={person.id}>
          <p>{person.firstName + " " + person.lastName}</p>
        </div>
  )});
}

export default NameCard;