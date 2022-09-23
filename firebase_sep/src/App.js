import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataDisply } from "./components/DataDisplay";
import { UserAuthContextProvider } from "./components/helpers/UserAuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import "primeflex/primeflex.css";
import { Grid, InputGroup_Login, InputGroup_Signup } from "./components/Grid";

function App() {
  return (
    <Router>
      {/* <Container style={{ width: "400px" }}> */}
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/data" element={<DataDisply />} />
                <Route
                  path="/login"
                  element={<Grid center_area={<InputGroup_Login />} />}
                />
           
                <Route path="/signup" element={<Grid center_area={<InputGroup_Signup />} />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
