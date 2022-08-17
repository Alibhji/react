import React, { Component } from "react";
import auth from "../components/scripts/firebase_helper.js";
import { SignUpComponent } from "../components/components/formik.signup";
import "./styles.css";
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="mainContainer">
        <div className="topContainer"></div>
        <div className="middleContainer">
          <div className=" loginContainer">
            <SignUpComponent />
          </div>
        </div>
        <div className="bottomContainer"></div>
      </div>
    );
  }
}

export default SignUp;
