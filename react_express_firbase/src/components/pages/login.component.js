import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginComponent = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
      }} 
      onSubmit={(values ,{setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        } , 500);

      }}
    >
        {({ isSubmitting }) => (

      <Form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage
            name="email"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="phone" className="form-control" />
          <ErrorMessage
            name="phone"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>

        </div>
      </Form>
        )}
    </Formik>
  );
};
