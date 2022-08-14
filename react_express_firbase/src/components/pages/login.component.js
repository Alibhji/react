import React from "react";
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Styles = {
  input_feild: { marginTop: "20px", marginBottom: "20px" },
};

const sendrequest = async (values) => {
//   e.preventDefault();
//   const response = await axios.post("http://localhost:3000/new_user" ,{"email": "s"},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  const response = await axios.post("http://localhost:3000/new_user" ,{...values},{headers: {'Content-Type': 'application/json'}});

  // setUsers(response.data);
  // console.log(response.data);
  alert(JSON.stringify(response.data));
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

export const LoginComponent = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 1000);
        setSubmitting(false);
        sendrequest( values);
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
