// Firebase App is always required and must be first
var firebase = require("firebase/app");
var {
  getAuth,
  createUserWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getRedirectResult,
  signOut,
} = require("firebase/auth");

// Add additional services you want to use
require("firebase/auth");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

// console.log(firebaseConfig)

defaultApp = firebase.initializeApp(firebaseConfig);
console.log("firebase is initialized.");
exports.firebase_auth = defaultApp.auth;

auth = getAuth(defaultApp);
auth.languageCode = "it";

const appVerifier = RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  },
  auth
);

async function signInWithPhoneNumber(phoneNumber) {
  signInWithPhoneNumber(auth, phoneNumber)
    .then((confirmationResult) => {
      console.log("confirmationResult", confirmationResult);
      const verificationCode = prompt("Please enter verification code: ");
      return confirmationResult.confirm(verificationCode);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// exports.fireCreateUserWithEmailAndPassword = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log("[OK]----- createUserWithEmailAndPassword----", user);
//       phoneNumber = "+13138480243";
//       signInWithPhoneNumber(phoneNumber);

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       // ..
//     });
// };
