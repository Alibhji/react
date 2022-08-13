import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./create-user";
import Users from "./users.component";
import AllUsers from "./allusers.component";
import AllUsersFunc from "./all_users_func";
import Layout from "./pages/Layout";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
