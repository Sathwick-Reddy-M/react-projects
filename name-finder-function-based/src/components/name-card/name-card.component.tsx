import { Person } from "../../App";
import './name-card.styles.css';

type Props = {
  filteredPersons: Person[]
}

function NameCard(props: Props) {

  return props.filteredPersons.map((person) => {
      return (
        <div key={person.id} className="name-card">
          <p>{person.firstName + " " + person.lastName}</p>
        </div>
  )});
}

export default NameCard;