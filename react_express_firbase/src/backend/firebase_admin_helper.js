var admin = require("firebase-admin");
var serviceAccount = require("./react-aws-test-firebase-adminsdk-x9ctb-e27860299e.json");

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
} = require("firebase-admin/auth");

defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

auth = getAuth(defaultApp);

fireCreateUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("[OK]----- createUserWithEmailAndPassword----", user);
      phoneNumber = "+13138480243";
      //   signInWithPhoneNumber(phoneNumber);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

exports.fireCreateUserWithEmailAndPassword = fireCreateUserWithEmailAndPassword;
