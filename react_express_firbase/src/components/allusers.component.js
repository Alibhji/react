import React, { Component } from "react";
import axios from "axios";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendrequest = this.sendrequest.bind(this);
    this.state = {users:[
      { "_id":"100nd" ,name: "ali", email: "a@a.com" },
      { "_id":"101nd" ,name: "bb", email: "b@b.com" },
    ]};
    console.log(this.state);
  }
  onSubmit(e) {
    e.preventDefault();
    this.sendrequest();
    // const updates = this.state.users;
    // this.sendrequest();
    // this.state.users.map((user) => {
    //   updates.push(
    //   {"name": 'a',"email":'m'}
    //   );
    // })
    // this.setState({users: updates});
  }

  sendrequest = async () => {
    await axios.get("http://localhost:3000/").then((res) => {
      // this.state = res.data;
      const updates = this.state.users;
      res.data.map((user) => {
        updates.push(
          {...user}
          
        )
        console.log(user)})
      
      this.setState({users: updates});
      console.log(this.state);
    });
  };

  async componentDidMount() {
    // this.sendrequest();
    console.log("!!!!componentDidMount");
  }

  render() {
    return (
      <div>
        <h1>All Users</h1>
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="Get Users" />
        </form>
        <table>
          <thead>
            <tr>
            <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>PASS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.pass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


