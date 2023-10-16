import { Component } from "react";

class NameCard extends Component {
    render() {
        return this.props.filteredPersons.map((person) => {
            return (
              <div key={person.id}>
                <p>{person.firstName + " " + person.lastName}</p>
              </div>
            )});
    }
}

export default NameCard;