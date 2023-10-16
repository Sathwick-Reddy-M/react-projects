function NameSearch(props) {
  return (
    <input
      type="search"
      placeholder="search persons"
      onChange={props.eventHandler}
    />
  );
}

export default NameSearch;
