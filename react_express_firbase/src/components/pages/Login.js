import React, { Component } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./styles.css";
import { LoginComponent } from "./login.component";



const LoginForm = () => {
    return (
        <form>
            Login
        </form>)}

class LoginPage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="topContainer"></div>
        <div className="middleContainer">
            <div className=" loginContainer"> 
                <LoginComponent />
            </div>
      
        </div>
        <div className="bottomContainer"></div>
         
        
      </div>
    );
  }
}

export default LoginPage;


