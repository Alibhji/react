import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./components/helpers/UserAuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/home"  element={ <ProtectedRoute> <Home /> </ProtectedRoute>} />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
