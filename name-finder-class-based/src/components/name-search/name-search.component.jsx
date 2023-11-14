import { Component } from "react";
import "./name-search.styles.css";

class NameSearch extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder="Search persons"
        onChange={this.props.eventHandler}
        className="name-search"
      />
    );
  }
}

export default NameSearch;
