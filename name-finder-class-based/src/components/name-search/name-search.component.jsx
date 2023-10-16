import { Component } from "react";

class NameSearch extends Component {

    render() {
        return (<input
            type="search"
            placeholder="search persons"
            onChange={this.props.eventHandler}
          />)
    }
}

export default NameSearch;