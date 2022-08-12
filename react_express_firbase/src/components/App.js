import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./create-user";
import Users from "./users.component";
import AllUsers from "./allusers.component";
import AllUsersFunc from "./all_users_func";



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">React Axios Tutorial</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create-user"}>
                    Create User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/users"}>
                    Users List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/all-users"}>
                    all-users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Routes>
                <Route exact path="/" element={<AllUsersFunc />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/users" element={<Users />} />
                <Route path="/all-users" element={<AllUsers/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
