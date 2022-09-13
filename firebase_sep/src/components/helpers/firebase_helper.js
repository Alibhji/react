import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// create .env.local file and add your firebase config
// MONGODB_URI = "mongodb+srv://..."
// REACT_APP_FIREBASE_API_KEY = "..."
// REACT_APP_FIREBASE_AUTH_DOMAIN = "..."
// REACT_APP_FIREBASE_PROJECT_ID = "..."
// REACT_APP_FIREBASE_STORAGE_BUCKET = "..."
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "..."
// REACT_APP_FIREBASE_APP_ID = "..."
// REACT_APP_FIREBASE_CLIENT_ID = "..."
// REACT_APP_FIREBASE_SCOPES =[
//     "https://www.googleapis.com/auth/userinfo.email",
//     "https://www.googleapis.com/auth/userinfo.profile",
//      "https://www.googleapis.com/auth/calendar"
// ]
// REACT_APP_FIREBASE_DISCOVERY_DOCS =[
//     "https://calendar-json.googleapis.com/$discovery/rest?version=v3"
// ]

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // clientID: process.env.REACT_APP_FIREBASE_CLIENT_ID,
  // scopes: process.env.REACT_APP_FIREBASE_SCOPES,
  // discoveryDocs: process.env.REACT_APP_FIREBASE_DISCOVERY_DOCS,
};
// Initialize Firebase
console.log("firebaseConfig", firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// var uiConfig = {
//   signInSuccessUrl: "localhost:3000", // Assuming you are running on your local machine
//   signInOptions: [
//     {
//       provider: auth.GoogleAuthProvider.PROVIDER_ID,
//       scopes: firebaseConfig.scopes
//     }
//   ],
//   // Terms of service url.
//   tosUrl: "<your-tos-url>"
// };

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new auth.AuthUI(auth());
// // The start method will wait until the DOM is loaded.
// ui.start("#firebaseui-auth-container", uiConfig);

export default auth;
