import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./styles.css";

class Square extends React.Component {
  render() {
    return (
      <MDBBtn className={this.props.className} onClick={() => this.props.onClick()}>
        {this.props.value}
      </MDBBtn>
    );
  }
}

class Board extends React.Component {
  renderSqure(i , style) {
    return <Square className={style} value={i} onClick={() => alert(i)} />;
  }

  render() {
    let squares = [];
    let posts = [];
    for (let i = 0; i < 20; i++) {
      squares.push(this.renderSqure(i, "Squre"));
    }

    for (let i = 0; i < 20; i++) {
        posts.push(this.renderSqure(i, "Squre post"));
      }

    return (
      <div className="mainContainer">
        <div className="containerBlock leftContainer">{squares}</div>
        <div className="containerBlock middleContainer">{posts}</div>
        <div className="containerBlock rightContainer">{squares}</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Board />;
  }
}

export default App;
