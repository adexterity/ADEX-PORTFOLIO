import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h3>
          Select Language:
          <i className="flag us"></i>
          <i className="flag ng"></i>
        </h3>
        <UserCreate />
      </div>
    );
  }
}

export default App;
