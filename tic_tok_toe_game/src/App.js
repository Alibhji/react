import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>In the App</div>
        <Square value="X" onClick={() => alert("X")} />
      </div>
    );
  }
}

export default App;
