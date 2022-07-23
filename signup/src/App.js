import logo from "./logo.svg";
import "./App.css";
import { MDBTextArea } from "mdb-react-ui-kit";
import Card from "./components/cards";
import Navbar from "./components/navbars";

const SiugnUp = () => {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
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
        <Card></Card>
      </header>
    </div>
  );
}

export default App;
