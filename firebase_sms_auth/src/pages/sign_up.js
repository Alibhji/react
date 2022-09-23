import React, { Component } from "react";
import auth from "../components/scripts/firebase_helper.js";
import {
  LoginComponent,
  RestPasswordComponent,
  SignOutComponent,
  SignUpComponent,
  SmsVerificationComponent,
} from "../components/components/formik.signup";
import "./styles.css";
import { SimpleSignUpComponent } from "../components/components/simpleSignup.js";



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
            {/* <SignUpComponent />
            <LoginComponent /> */}
            <SimpleSignUpComponent />
          </div>
        </div>
        <div className="bottomContainer">
          <SignOutComponent />

          <SmsVerificationComponent />
        </div>
      </div>
    );
  }
}

export default SignUp;
