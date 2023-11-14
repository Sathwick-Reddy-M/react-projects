import { Component } from "react";
import "./name-card.styles.css";

class NameCard extends Component {
  render() {
    return this.props.filteredPersons.map((person) => {
      return (
        <div key={person.id} className="name-card">
          <p>{person.firstName + " " + person.lastName}</p>
        </div>
      );
    });
  }
}

export default NameCard;
