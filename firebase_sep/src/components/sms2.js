import React from "react";
import { app, auth, RecaptchaVerifier } from "./helpers/firebase_helper";
import { signInWithPhoneNumber } from "firebase/auth";

export default class LoginSMS2 extends React.Component {
  constructor(props) {
    super(props);
    this.setUpRecaptcha = this.setUpRecaptcha.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
  }

  setUpRecaptcha = (e) => {};

  onSignInSubmit = (e) => {
    e.preventDefault();
    let phoneNumber = "+13138480243";
    console.log(phoneNumber);

    let appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
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

  componentDidMount() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );
    window.recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  }

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
