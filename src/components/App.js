import React from "react";
import User from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserInfo = this.handleUserInfo.bind(this);
    this.state = { userName: "", userInfo: null };
  }

  /**
   * callback function handling user info
   * @param userInfo object that includes github user information
   */
  handleUserInfo(userInfo) {
    this.setState({ userInfo });
  }

  /**
   * fetch user information from Github API
   * @param user Github username
   * @param callback function that takes user information object as a parameter
   */
  fetchGithubUser(user, callback) {
    if (!user) {
      this.setState({ userInfo: null });
      return;
    }

    fetch(`https://api.github.com/users/${user}`)
      .then(data => {
        return data.json();
      })
      .then(userInfo => {
        callback(userInfo);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Github Profile Explorer</h2>

          <input
            id="username-input"
            placeholder="Github username"
            onChange={e => {
              this.setState({ userName: e.target.value });
            }}
          />

          <button
            id="fetch-button"
            onClick={e => {
              this.fetchGithubUser(this.state.userName, this.handleUserInfo);
            }}
          >
            Bring Github User
          </button>
        </div>

        <User userInfo={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
