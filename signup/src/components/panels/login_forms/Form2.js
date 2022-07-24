import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Forms.scss";

const initialState = {
  email: "<email>@gmail.com",
  phone: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required")
});

// const signupSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Only Gmail email is allowed.")
//     .match(/@gmail.com$/, "Only Gmail email is allowed.")
//     .required("Email is required"),
//   phoneNumber: Yup.string()
//     .match(/^\d{10}$/, "Phone number must be 10 digits.")
//     .required("Phone number is required"),

//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters.")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
//     .matches(/[0-9]/, "Password must contain at least one number.")
//     .matches(
//       /[!@#$%^&*]/,
//       "Password must contain at least one special character."
//     )
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match.")
//     .required("Confirm password is required"),
//   terms: Yup.bool()
//     .oneOf([true], "Terms must be accepted")
//     .required("Terms must be accepted"),
// });

const SignupForm = () => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={signupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formic) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        } = formic;
        return (
          <div className="container">
            <h1>Sign in to continue</h1>
            <Form onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" component="div" />

              <Field
                name="phone"
                type="text"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <ErrorMessage name="phone" component="div" />

                <button type="submit" disabled={!isValid || !dirty}>
                    Submit
                </button>
                
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
