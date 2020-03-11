import React from "react";
import axios from "axios";
import "./App.css";
import Me from "./components/Me";
import Followers from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/AgentBillster").then(res => {
      console.log("getting the response ------>", res);
      this.setState({ me: res.data });
    });

    axios
      .get("https://api.github.com/users/AgentBillster/followers")
      .then(res => {
        console.log("getting the response ------>", res);
        this.setState({ followers: res.data });
      });
  }

  render() {
    console.log("this is the current state --------->", this.state.me);
    console.log("this is the current state --------->", this.state.followers);

    return (
      <div className="App">
        <h1>the peoples</h1>
          <Me data={this.state.me} />

          
          {this.state.followers.map(item => {
           return <Followers pic={item.avatar_url} name={item.login} />
          })}
          
      </div>
    );
  }
}

export default App;
