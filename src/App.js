import React from "react";
import axios from "axios";
import FollowerList from "./components/FollowerList";
import User from "./components/User";

class App extends React.Component {
  state = {
    searchInput: "Timbobeek",
    handle: "",
    followers: [],
    user: {},
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchInput: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const searchInput = this.state.searchInput;

    axios
      .get(`https://api.github.com/users/${searchInput}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          ...this.state,
          user: response.data,
          handle: searchInput,
        });
      });
  };

  componentDidMount() {
    const searchInput = this.state.searchInput;

    if (!searchInput) {
      return;
    }

    axios.get(`https://api.github.com/users/${searchInput}`).then((response) => {
      console.log(response.data);
      this.setState({
        ...this.state,
        user: response.data,
        handle: searchInput,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.handle !== this.state.handle) {
      const handle = this.state.handle;

      this.setState({
        ...this.state,
        searchStarted: false,
      });

      axios
        .get(`https://api.github.com/users/${handle}/followers`)
        .then((response) => {
          this.setState({
            ...this.state,
            followers: response.data,
          });
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Github Users Info</h1>
        <form>
          <input value={this.state.searchInput} onChange={this.handleChange} />
          <button onClick={this.handleSearch}>Search People</button>
        </form>
        <br></br>

        <User
          name={this.state.user.name}
          image={this.state.user.avatar_url}
          username={this.state.user.login}
          totalRepos={this.state.user.public_repos}
          totalFollowers={this.state.user.followers}
        />
        <h2>Followers:</h2>
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
