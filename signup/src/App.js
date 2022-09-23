import logo from "./logo.svg";
import "./App.css";
import { MDBTextArea } from "mdb-react-ui-kit";
import { Card, FormExample } from "./components/cards";
import Navbar from "./components/navbars";
import SignupForm from "./components/panels/login_forms/Form2";
import ContainderMed from "./components/containers/ContainderMed";
import Signup from "./pages/signup";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Signup />  
        <Navbar></Navbar>
        {/* <Form1></Form1> */}
        {/* <SignupForm> </SignupForm> */}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <ContainderMed item={<SignupForm/>} > </ContainderMed>
        <Card></Card>
        <FormExample></FormExample> */}
      </header>
    </div>
  );
}

export default App;
