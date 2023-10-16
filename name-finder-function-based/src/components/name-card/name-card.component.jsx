
function NameCard(props) {

  return props.filteredPersons.map((person) => {
      return (
        <div key={person.id}>
          <p>{person.firstName + " " + person.lastName}</p>
        </div>
  )});
}

export default NameCard;