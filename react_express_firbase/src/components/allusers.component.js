import React, { Component } from "react";
import axios from "axios";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendrequest = this.sendrequest.bind(this);
    this.state = [
      { name: "ali", email: "a@a.com" },
      { name: "bb", email: "b@b.com" },
    ];
    console.log(this.state);
  }
  onSubmit(e) {
    e.preventDefault();
    this.sendrequest();
    
  }

   sendrequest= async ()=>{
  await axios.get("http://localhost:3000/").then((res) => {
    // this.state = res.data;

    res.data.forEach((item) => {
      this.state.push(item);
    });
      console.log(this.state);
  }
  );}

  async componentDidMount() {
    this.sendrequest();
  }



  render() {
    return (
      <div>
        <h1>All Users</h1>
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="Get Users" />
        </form>
        <ul>
          {this.state.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

