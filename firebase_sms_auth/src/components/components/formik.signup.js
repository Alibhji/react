import React from "react";
import {useState} from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useUserAuth } from "../scripts/UserAuthContext";
import { signOut } from "firebase/auth";

const Styles = {
  input_feild: { marginTop: "20px", marginBottom: "20px" },
};

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .max(50, "Email cannot be more than 30 characters")
    .required("Required")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@gmail+(?:\.[a-zA-Z0-9-]+)*$/,
      "Only gmail address is allowed."
    ),
  phone: Yup.string()
    .required("Required")
    .min(10, "Must be 10 characters or less")
    .max(10, "Must be 10 characters or less"),
});

export const SignUpComponent = () => {
  const auth_handler = useUserAuth();
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // auth_handler.logInSms();
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          auth_handler
            // .signUp(values.email, values.phone)
            .signIn(values.email, "")
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("[OK]----- createUserWithEmailAndPassword----", user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
            });
        }, 500);
      }}
      validationSchema={ValidationSchema}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="form-group" style={Styles.input_feild}>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className={
                touched.email && errors.email
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {touched.email && errors.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>
          <div className="form-group" style={Styles.input_feild}>
            <label htmlFor="phone">Phone</label>
            <Field
              name="phone"
              type="phone"
              className={
                touched.phone && errors.phone
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {touched.phone && errors.phone ? (
              <div className="invalid-feedback"> {errors.phone}</div>
            ) : null}
          </div>
          <div className="form-group">
            <button
              style={Styles.input_feild}
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export const SignOutComponent = () => {
  const auth_handler = useUserAuth();
  return (
    <div>
      <button
        onClick={() => {
          auth_handler.logOut();
          console.log("sign out");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export const LoginComponent = () => {
  const auth_handler = useUserAuth();
  return (
    <div>
      <button
        onClick={() => {
          auth_handler.logInSms();
          console.log("sign in");
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export const SmsVerificationComponent = () => {
  const auth_handler = useUserAuth();
  return (
    <div>
      <button
        onClick={() => {
          auth_handler.logInSms();
          console.log("SmsVerification");
        }}
      >
        Verify
      </button>
    </div>
  );
};

