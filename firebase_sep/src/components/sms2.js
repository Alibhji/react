import React from "react";
import { app, auth } from "./helpers/firebase_helper";

export default class LoginSMS2 extends React.Component {
  constructor(props) {
    super(props);
    this.setUpRecaptcha = this.setUpRecaptcha.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
  }

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new app.auth.RecaptchaVerifier(
      "recaptcha-container",
      
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.setUpRecaptcha();
    let phoneNumber = "";
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    app
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        console.log("OTP is sent");
        var code = window.prompt("Enter otp ... !");
        confirmationResult
          .confirm(code)
          .then(function (result) {
            var user = result.user;
            console.log("lol success");
            console.log("ass" + user);
          })
          .catch(function (error) {
            alert("wrong otp" + error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h2 className="">Login</h2>
        <form className="form" onSubmit={this.onSignInSubmit}>
          <div id="recaptcha-container"></div>

          <input type="number" name="mobile" placeholder="Mobile Number" />

          <input button="Submit" type="submit" />
        </form>
      </div>
    );
  }
}
