import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Music Mix</div>
        <div>
          <input placeholder="Search your favourate artist" />
          <button>Button</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">Gallery</div>
      </div>
    );
  }
}
export default App;
