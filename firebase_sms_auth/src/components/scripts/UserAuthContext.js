import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged,
  signOut,
  resetPassword,
} from "firebase/auth";
import auth from "./firebase_helper";
auth.languageCode = "it";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // const appVerifier = RecaptchaVerifier(
  //   "sign-in-button",
  //   {
  //     size: "invisible",
  //     callback: (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       // onSignInSubmit();
  //     },
  //   },
  //   auth
  // );
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function resetPassword(email) {
    return resetPassword(auth, email);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function logInSms() {
    let phoneNumber = "+1" + "3138480243";
    let verify = new RecaptchaVerifier("recaptcha-container");
    signInWithPhoneNumber(phoneNumber, verify)
      .then((result) => {
        alert("code sent");
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{ user, signUp, signIn, logInSms, logOut, resetPassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
