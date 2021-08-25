import React, { Component } from "react";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((json) => this.setState({ robots: json }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((r) => {
      return r.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1 className="tc f2">Loading...</h1>;
    } else {
      return (
        <div className="App tc">
          <h1 className="f1">RobotFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
